const prompt = require('prompt-sync')({sigint: true})

let age = Number(prompt("Insira sua idade: "))
if (age <= 12) {
  console.log("Grupo: Criança")
} else if (age <= 18) {
  console.log("Grupo: Adolescente")
} else if (age <= 60) {
  console.log("Grupo: Adulto")
} else {
  console.log("Grupo: Idoso")
}