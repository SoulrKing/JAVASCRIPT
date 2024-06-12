function gerar(){
    var numero = document.getElementById("numero")
    var tabuada = document.getElementById("tabuada")
    var calculo 
    if(numero.value.length == 0){
        window.alert("digite um numero valido")

    }else{
        let n = Number(numero.value)
        let c = 1
        tabuada.innerHTML = " "
        while (c <= 10){
            let item = document.createElement("option")
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `Tabuada${c}`
            tabuada.appendChild(item)
            c++
        }
    }
}