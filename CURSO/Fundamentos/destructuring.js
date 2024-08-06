// novo recurso do ES2015

const pessoa  = {
    nome: "Ana",
    idade: 18,
    endereco:{
        logradouro: "rua Exemplo",
        numero: 102
    }
}

const {
    nome, idade
} = pessoa

console.log(nome, idade)