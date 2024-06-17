let numero = document.getElementById("txtn")
let tabela = document.getElementById("txtns")
let res = document.querySelector("div#res")
let valores = []
function innumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function intabela(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adi() {
    if (innumero(numero.value) && !intabela(numero.value, valores)) {
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `o valor ${numero.value} foi adicionado.`
        tabela.appendChild(item)
        res.innerHTML = " "
    } else {
        window.alert("Valor invalido ou já encontrado na Tabela.")
    }
    numero.value = " "
    numero.focus()
}

function fim() {
    if (valores.length == 0) {
        window.alert("Adicione um valor pra finalizar")
    } else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / total
        res.innerHTML = " "
        res.innerHTML += `<p> Ao todo temos, ${total} de valores colocados.</p>`
        res.innerHTML += `<p> O maior valor é ${maior}.</p>`
        res.innerHTML += `<p>O menor valor é ${menor}.</p>`
        res.innerHTML += `<p>A soma total dos avalores é ${soma}.</p>`
        res.innerHTML += `<p> a media dos valores é ${media}</p>`
    }
}