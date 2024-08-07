function tratarerroelancar(erro){
    //throw new Error("...")
    //throw 10
    //throw true
    // throw "Msg"
    throw {
        nome: erro.name,
        msg: erro.message,
        data: new Date
    }
}

function ImprimirnomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + "!!!")
    } catch (e) {
        tratarerroelancar(e)
    }
    finally{
        console.log("final")
    }
}
const obj = { name: "Roberto" }
ImprimirnomeGritado(obj)