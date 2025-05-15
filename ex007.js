const prompt = require('prompt-sync')({sigint:true})

let quantt = parseInt(prompt("Insira a quantidade de maçãs compradas: "))
let price
if (quantt >= 12) {
    price = 0.25
} else {
    price = 0.30
} 
let totall = quantt * price
let totallARR = Math.round(totall * 100) / 100
console.log("Valor total: R$", totallARR)