//função sem retorno

function imprimirsoma(a, b){
    console.log(a + b)
}

imprimirsoma(2,3)
imprimirsoma(2)
imprimirsoma(2, 10, 3, 5, 6, 7)
imprimirsoma()

//função com retorno

function soma(a, b = 0){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())
