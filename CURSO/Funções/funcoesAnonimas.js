const soma = function (x, y) {
    return x + y
}

const imprimirRes = function (a, b, operaçao = soma) {
    console.log(operaçao(a, b))
}

imprimirRes(3, 4)
imprimirRes(3, 4, soma)
imprimirRes(3, 4, function (x, y) {
    return x - y
})
imprimirRes(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function () {
        console.log("opa")
    }
}

pessoa.falar()