let a = 3

global.b = 123

this.c = 345
this.d = false
this.e = "texto"

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// criando uma variavel sem var e let, não recomendado!
abc = 3 // não declare sem let const ou var

console.log(global.abc)

// module.exports = { e: 345, f: false, g: "texto"}
