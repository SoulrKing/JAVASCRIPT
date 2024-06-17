let numero = document.getElementById("txtn")
let tabela = document.getElementById("txtns")
let valores = [ 0, 1, 2, 3, 4, 5, 6, 7, 8,]
function adi() {
    if (numero.value <= 0) {
        window.alert("Digite um numero valido")
    } else if (numero.value > 100) {
        window.alert("Digite um numero abaixo de 100")

    } else {
        let n = Number(numero.value)
        let c = 0
        tabela.innerHTML = " "
        for (let nm in valores) {
            nm = document.createElement("option")
            nm.text = `O valor ${n} foi adicionado`
            tabela.appendChild(nm)
            c++
        }
    }
}