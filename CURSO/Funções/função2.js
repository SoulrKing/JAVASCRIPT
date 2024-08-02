// armazendo uma função em uma variavel

const imprimirsoma = function(a,b) {
    console.log(a + b)
}
imprimirsoma(2,3)

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 3))

// retorno implicito
const subtração = (a, b) => a - b
console.log(subtração(2, 3))