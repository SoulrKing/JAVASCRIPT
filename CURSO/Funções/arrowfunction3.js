let comparacomthis = function (parametro) {
    console.log(this === parametro)
}

comparacomthis(global)

const obj = { }
comparacomthis = comparacomthis.bind(obj)
comparacomthis(global)
comparacomthis(obj)

let comparacomthisarrow = parametro => console.log(this === parametro)
comparacomthisarrow(global)
comparacomthisarrow(module.exports)

comparacomthisarrow = comparacomthisarrow.bind(obj)
comparacomthisarrow(obj)
comparacomthisarrow(module.exports)