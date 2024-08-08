// funcão em JS é Fist-class OBJECT (citizens)
// Higher-order function

//criar de forma literal
function fun1() { }

// podemos armazernar uma function em uma variavel
const fun2 = function () { }

// podemos armazenar em um array tambem 
const arrayEX = [function (a, b) { return a + b }, fun1, fun2]


//podemos armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return "opa" }
console.log(obj.falar())

//Passar função como parameto
function run(fun) {
    fun()
}

run(function () { console.log("Executando...") })

// Uma funcão pode retornar ou conter uma outra função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincomais = soma(2, 3) // EXEMPLO DE UMA CHAMADA DE FUNÇÃO CRIANDO UMA CONSTANTE
cincomais(4)