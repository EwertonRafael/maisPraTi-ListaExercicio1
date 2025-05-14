let prompt = require("prompt-sync")();
let peso = Number(prompt("Digite o peso: "))
let altura = Number(prompt("Digite a altura: "))
let imc = peso / (altura * altura)
if (imc < 18.5) {
  console.log("Baixo peso")
} else if (imc >= 18.5 && imc < 25) {
  console.log("Peso normal")
} else if (imc >= 25 && imc < 30) {
  console.log("Sobrepeso")
} else {
  console.log("Obesidade")
}