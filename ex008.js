const prompt = require('prompt-sync')({sigint: true})

let val1 = Number(prompt("Digite o primeiro número: "))
let val2 = Number(prompt("Digite o segundo número: "))

let vals = [val1, val2]
vals.sort((x, y) => x - y)

console.log("Números em ordem crescente: " + vals.join(", "))
