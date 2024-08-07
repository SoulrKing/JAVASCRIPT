function boanoticia(nota){
    if(nota >= 7) {
        console.log("Aprovado!! com " + nota)
    }
}

boanoticia(8.1)
boanoticia(6.1)

function seforverdadeeufalo(valor){
    if(valor){
        console.log("é verdade..." + valor)
    }
}

seforverdadeeufalo()
seforverdadeeufalo(null)
seforverdadeeufalo(undefined)
seforverdadeeufalo(NaN)
seforverdadeeufalo("")
seforverdadeeufalo(0)
seforverdadeeufalo(-1)
seforverdadeeufalo(" ")
seforverdadeeufalo(":")
seforverdadeeufalo([])
seforverdadeeufalo([1, 2])
seforverdadeeufalo({})