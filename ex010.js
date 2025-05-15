const prompt = require('prompt-sync')({sigint:true})

let numint = parseInt(prompt("Insira um número inteiro: "))
for (let i = 0; i < 10; i++) {
    console.log(numint)
}