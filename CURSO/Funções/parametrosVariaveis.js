function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(1, 3, 4, 5.5)
console.log(soma(1, 2, "texto"))
console.log(soma("exemplo ", "de ", "texto"))