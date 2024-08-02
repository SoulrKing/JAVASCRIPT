{ 
    { 
        { 
            { 
                var sera = "será??" 
            } 
        } 
    } 
}

console.log(sera)

// Var consegue criar uma variavel e de um scopo global, que significa, que ela pode ser vista de fora do bloco

function test(){
    var local = 123
}

test()
console.log(test())
//vai dar undefined porque,  uma var dentro de uma função, ela so ira funcionar dentro daquela função