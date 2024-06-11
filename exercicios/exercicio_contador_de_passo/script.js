function verificar(){
    let inicio = document.getElementById("inicio")
    let fim = document.getElementById("fim")
    let passos = document.getElementById("passos")
    let resultado = document.getElementById("resultado")
    
        if( inicio.value.length == 0 || fim.value.length == 0 || passos.value == 0){
            window.alert("[ERROR] Preencha todos os campos")
        } else{
            resultado.innerHTML = "Contando..."
            let i = Number(inicio.value)
            let f = Number(fim.value)
            let p = Number(passos.value)
            if (i<f){// contagem crescente
                for(let c = i ; c <= f ; c += p){
                    resultado.innerHTML += `${c} \u{1F449} `
                }
            }else{ // contagem decrescente
                for(let c = i; c >= f; c -= p){
                    resultado.innerHTML += `${c} \u{1F449} `
                }
            }
            resultado.innerHTML += `\u{1F3C1}`
        }
}