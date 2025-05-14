let prompt = require("prompt-sync")();
let num = Number(prompt("Digite o número de maçãs compradas: "))
if (num < 12) {
  console.log("Total: R$", num * 0.30)
} else {
  console.log("Total: R$", num * 0.25)
}