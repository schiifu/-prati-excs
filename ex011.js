const prompt = require('prompt-sync')({sigint:true})

let soma = 0
for (let i = 0; i < 5; i++) {
    let numb = parseInt(prompt(`Insira o ${i + 1}º número: `))
    soma += numb
}
console.log("Soma: ", soma)