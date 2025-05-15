const prompt = require('prompt-sync')({sigint: true})

let weight = parseFloat(prompt("Insira o seu peso: "))
let height = parseFloat(prompt("Insira a sua altura: "))
let imc = weight / (height * height)
let imcARR = Math.round(imc * 100) / 100

if (imc < 16) {
    console.log("Classificação: Magreza Grave")
} else if (imc = 16 && imc < 17) {
    console.log("Classificação: Magreza Moderada")
} else if (imc = 17 && imc < 18,5) {
    console.log("Classificação: Magreza Leve")
} else if (imc = 18,5 && imc <25) {
    console.log("Classificação: Saudável")
} else if (imc = 25 && imc < 30) {
    console.log("Classificação: Sobrepeso")
} else if (imc = 30 && imc <35) {
    console.log("Classificação: Obesidade Grau I")
} else if (imc = 35 && imc < 40) {
    console.log("Classificação: Obesidade Grau II")
} else if (imc > 40) {
    console.log("Classificação: Obesidade Grau III")
}

console.log("IMC:", imcARR);