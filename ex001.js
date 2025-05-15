const prompt = require('prompt-sync')({sigint: true})

let numero = Number(prompt("Insira um número: "))
if (numero % 2 === 0) {
  console.log("O número inserido é par.")
} else {
  console.log("O número inserido é ímpar.")
}
