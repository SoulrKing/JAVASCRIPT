function getinteiroaleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getinteiroaleatorio( -1, 10)
    consol.log(`opção escolhida foi ${opcao}.`)
}

console.log("até a proxima!")