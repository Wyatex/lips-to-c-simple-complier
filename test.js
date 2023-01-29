const compiler = require('./complier')
const lipsSrc = '(add 1 (subtract 3 2))'
console.log(`lips源码：${lipsSrc}\nC源码：${compiler(lipsSrc)}`)