const pessoa = {
    saudação: "bom dia",
    falar(){
        console.log(this.saudação)// sem o this da erro
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falardepessoa = pessoa.falar.bind(pessoa)
falardepessoa()