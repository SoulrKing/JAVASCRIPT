function teste1(num) {
    if (num > 7)
        console.log(num)

    console.log("final")
}

teste1(6)
teste1(8)

function teste2(num) {
    if (num > 7);{ // cuidado com o ";", nao usar com as estruturas de controles
        console.log(num)
    }
}

teste2(6)
teste2(8)