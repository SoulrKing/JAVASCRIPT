// Cada array ou uma variavel composta tem elementos, e cada elemento e composto pelo seu valor e por uma chave de indentificação

let num = [ 6, 5, 7]
console.log(`Meu vetor é ${num}`)

num[3] = 1
console.log(`Meu vetor com o numero em quarto espaço é ${num}`)

num.push(9)
console.log(`Meu vetor com um numero adicionado no final ${num}`)

num.length
console.log(`Esse eo tamanho do meu vetor ${num}`)

num.sort()
console.log(`Esse é o meu vetor em ordem ${num}`)

 let pos = num.indexOf(7)
console.log(`O 7 esta na posição ${pos}`)

// Os elementos sempre começam pelo o numero 0 tipo 0,1,2,3,4,5,6,7,8,9 (isso sao 10 posições) como voce pode ver começa do zero termina no 9 

for(let pos=0; pos<num.length;pos++){
    console.log(num[pos])
}
