function rando([min = 0, max = 1000 ]){
    if (min>max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min 
    return Math.floor(valor)
}

console.log(rando([50,40]))
console.log(rando([995]))
console.log(rando([, 10]))
console.log(rando([]))