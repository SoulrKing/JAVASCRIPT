function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    if(fano.value.length == 0 || fano.value > ano){
        window.alert("Verifique os dados e tente novamente!")
    } else{
        var fgen = document.getElementsByName("radgen")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("Id", "foto")
        if (fgen[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <10){
                //criança 
                img.src = "homem-bebe.jpg"
            }else if(idade < 21){
                //adolecente
                img.setAttribute("src", "homem-adolecente.jpg")
            }else if (idade < 50){
                //adulto
                img.setAttribute("src", "homem-adulto.jpg")
            }else{
                //idoso 
                img.setAttribute("src", "homem-idoso.jpg")
            }

        }else if(fgen[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <10){
                //criança 
                img.setAttribute("src", "mulher-bebe.jpg")
            }else if(idade < 21){
                //adolecente
                img.setAttribute("src", "mulher-adolecente.jpg")
            }else if (idade < 50){
                //adulto
                img.setAttribute("src", "mulher-adulta.jpg")
            }else{
                //idoso 
                img.setAttribute("src", "mulher-idosa.jpg")
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}