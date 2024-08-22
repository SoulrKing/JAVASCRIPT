const valor = "global"

function minhafunçao(){
    console.log(valor)
}

function exec(){
    const valor = "local"
    minhafunçao()
}

exec()