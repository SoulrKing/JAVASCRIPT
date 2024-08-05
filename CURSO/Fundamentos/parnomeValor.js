// par nome/valor
const saudacao = "opa" // contexto lexico 1

function exec() {
    const saudacao = "falaaa!" // contexto lexico 2
    return saudacao
}

// objetos são grupos aninhagod de pares nome/valor 

const cliente = {
    nome: "Roger",
    idade: 19,
    peso: 83,
    endereço: {
        casa: "Rua exemplo exemplo",
        numero: 123
    }
}

console.log(saudacao)
console.log(exec)
console.log( cliente)