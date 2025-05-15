const prompt = require('prompt-sync')({ sigint: true });

let soma = 0
let contt = 0
while(true) {
    let numbb = parseFloat(prompt("Digite um número decimal:\n--- 0 para sair ---\n"))
    if (numbb === 0) break
    soma += numbb
    contt++
} if (contt > 0) {
    console.log(`A média aritmética é: ${soma / contt}`)
}
