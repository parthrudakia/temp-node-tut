const path = require('path')

console.log(path.sep)

const filePath = path.join('/contents', 'hello', 'JOIN IT!')

console.log(filePath)

const base = path.basename(filePath)
console.log(base)


const absolute = path.resolve()
console.log(absolute)