const prompt = require('prompt-sync')({sigint:true})

let A = parseFloat(prompt("Insira o lado A:"))
let B = parseFloat(prompt("Insira o lado B:"))
let C = parseFloat(prompt("Insira o lado C:"))

if (A < B + C && B < A + C && C < A + B) {
  if (A === B && B === C) {
    console.log("Triângulo Equilátero")
  } else if (A === B || A === C || B === C) {
    console.log("Triângulo Isósceles")
  } else {
    console.log("Triângulo Escaleno")
  }
} else {
    console.log("Números inválidos.")
  }