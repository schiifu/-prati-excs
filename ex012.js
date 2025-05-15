const prompt = require('prompt-sync')({ sigint: true })

let numbb = parseInt(prompt("Insira um número de 1 a 10: "))

if (numbb >= 1 && numbb <= 10) {
    console.log(`Tabuada do: ${numbb}:`)
    for (let i = 1; i <= 10; i++) {
        let results = numbb * i
        console.log(`${numbb} * ${i} = ${results}`)
    }
}