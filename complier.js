const tokenizer = require('./tokenizer.js')
const parser = require('./parser.js')
const transformer = require('./transformer.js')
const generator = require('./generator.js')


function compiler(input) {
    let tokens = tokenizer(input); //生成tokens
    let ast    = parser(tokens); //生成ast
    let newAst = transformer(ast); //拿到新的ast
    return generator(newAst); //生成新代码;
}

module.exports = compiler