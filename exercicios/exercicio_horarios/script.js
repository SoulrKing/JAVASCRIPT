function carregar(){


var msg = window.document.getElementById("msg")
var img = window.document.getElementById("img")
var data = new Date()
var hora = data.getHours()
msg.innerText = `Agora são ${hora} horas.`

if(hora >= 0 && hora < 12){
    //Bom Dia
    img.src = "FotoManha.jpg"
    document.body.style.background = "#E5D9C1"
}else if(hora >= 12 && hora <= 18){
    //Boa Tarde
    img.src = "FotoTarde.jpg"
    document.body.style.background = "#F59F41"
}else{
    //boa noite
    img.src =  "FotoNoite.jpg"
    document.body.style.background = "#372D46"
}
}