let valor // não iniciado
console.log(valor)

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) //erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 30
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null //sem preço

console.log(!!produto.preco)
console.log(produto)