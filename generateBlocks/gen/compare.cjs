const { writeFileSync } = require('fs')

const readFile = require('fs').readFileSync
const readJsonFile = file => JSON.parse(removeComments(readFile(file).toString()))

if (process.argv.length < 5) {
	console.error("3 arguments required")
	process.exit()
}

const [_0, _1, json0, json1, outputFile] = process.argv

const o1 = readJsonFile(json0)
const o2 = readJsonFile(json1)

const differences = findDifferences(o1, o2)
if (Object.keys(differences).length === 0) console.log("No differences for " + outputFile)
else console.log("Differences for " + outputFile)

writeFileSync(outputFile, JSON.stringify(differences, null, 4))

/**
 * @param {string} s 
 * @returns {string}
 */
function removeComments(s) {
    let slashes = 0
    let inString = false
    let res = []
    let inComment = false
    for (let c of s) {
        if (inString) {
            if (c == '"') inString = false
        } else {
            if (c == '"') inString = true
            if (slashes == 2) {
                inComment = true
                // remove the two slashes
                res.pop()
                res.pop()
            }
            if (c == '/') slashes++
            else slashes = 0;
            if (inComment) {
                if (/\n|\r/.test(c)) inComment = false
                else continue
            }
        }
        if (!inComment) res.push(c)
    }
    return res.join("")
}

/**
 * @typedef {[string, string] | Record<string, object>} Difference
 */

/**
 * @param {unknown} o1 
 * @param {unknown} o2 
 * @returns {Difference}
 */
function findDifferences(o1, o2) {
    if (typeof o1 !== typeof o2) return [`type ${typeof o1}`, `type ${typeof o2}`]
    if (Array.isArray(o1) !== Array.isArray(o2)) {
        const o1Type = Array.isArray(o1)? 'array' : 'object'
        const o2Type = Array.isArray(o2)? 'array' : 'object'
        return [`type ${o1Type}`, `type ${o2Type}`]
    }
    if (typeof o1 === "object" && typeof o2 === "object" && o1 !== null && o2 !== null) {
        const keys = Object.keys({...o1, ...o2})
        return keys
            .map(key => {
                const difference = findDifferences(o1[key], o2[key])
                return { key, difference }
            })
            .filter(({ difference }) => Object.keys(difference).length != 0)
            .reduce((acc, { key, difference }) => {
                acc[key] = difference
                return acc
            }, {})
    }
    if (o1 !== o2) return [o1, o2]
    return []
}
