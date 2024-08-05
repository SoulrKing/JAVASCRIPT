// usa notação ponto pra acessar tudo

console.log(typeof Math.ceil(6.1))

const obj1 = {}
obj1.nome = "bola"

console.log(obj1)

function obj(nome){
    this.nome =  nome
    this.exec =  function(){
        console.log("exec...")
    }
}

const obj2 = new obj("cadeira")
const obj3 = new obj("mesa")
console.log(obj2.nome)
console.log(objs3.nome)
obj3.exec()