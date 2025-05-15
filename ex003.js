const prompt = require('prompt-sync')({sigint: true})

let grade = parseFloat(prompt("Insira sua nota de 0 a 10: "))
while (grade < 0 && grade > 10) {
    grade = parseFloat(prompt("Nota inválida, insira uma nota de 0 a 10: "))
}
if (grade >= 7) {
  console.log("Parabéns. Você está aprovado!")
} else if (grade <= 6.9) {
  console.log("Você foi reprovado.")
}