const executar = () => {
    const peso = eval(document.getElementById("peso").value)
    const altura = eval(document.getElementById("altura").value)
    const res = document.getElementById("res")
    const v_imc = imc(peso,altura)
    const v_sit = situação(v_imc)
    
    res.innerHTML = (`Imc: ${v_imc.toFixed(2)} :: Situação:${v_sit}`)
    
}
const imc = (peso, altura) => peso / (altura * altura)


const situação = (valor_imc) => {
    if (valor_imc < 18.5) {
        return "abaixodo peso"
    }
    else if(valor_imc < 25){
        return "Peso ideal parabéns"
    }
    else if(valor_imc < 30){
        return "levemente acima do peso"
    }
    else if(valor_imc < 35){
        return "Obesidade Grau1"
    }
    else if(valor_imc < 40){
        return "Obesidade Grau2"
    }
    else {
    return "Obesidade grau 3 Mórbida"
}
}
