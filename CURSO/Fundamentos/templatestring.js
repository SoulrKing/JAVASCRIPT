const nome = "Roger"
const concatenação = "olá " + nome + "!"
const template = `
olá
${nome}!` // com crase da para fazer uma template 
console.log(concatenação, template)

console.log(`1 + 1 = ${1 + 1}`)
const up = texto => texto.toUpperCase()
console.log(`ei...${up("cuidado")}!`)