const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function menuu() {
  console.log("\n--- MENU ---")
  console.log("1. Título do melhor filme do mundo")
  console.log("2. Emoticon de cachorrinho")
  console.log("3. New Order?")
  rl.question("Escolha de 1 a 3: ", (resposta) => {
    switch (resposta) {
      case "1":
        console.log("Matilda 1996 dir. DannyDeVito")
        rl.close()
        break
      case "2":
        console.log("૮˶• ﻌ •˶ა\n./づ~ 🦴")
        rl.close()
        break
      case "3":
        console.log("♪ Everytime i see you falling, i get down on my knees and pray ♪")
        rl.close()
        break
    }
  })
}
menuu();
