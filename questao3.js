let prompt = require("prompt-sync")();
let nota = Number(prompt("Digite a nota: "))
if (nota >= 7) {
  console.log("Aprovado")
} else if (nota >= 4 && nota < 7) {
  console.log("Recuperação")
} else {
  console.log("Reprovado")
}