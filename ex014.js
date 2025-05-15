const prompt = require('prompt-sync')({sigint:true})

let numbb = parseInt(prompt("Insira um número:"))
let fatorr = 1;
  for (let i = 1; i <= numbb; i++) {
    fatorr *= i;
} console.log(`Fatorial de: ${numbb}\nÉ: ${fatorr}`)