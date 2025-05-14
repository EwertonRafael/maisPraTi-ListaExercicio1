console.log("1 - Soma")
console.log("2 - Subtração")
console.log("3 - Multiplicação")
console.log("4 - Divisão")

let prompt = require("prompt-sync")();
let opcao = Number(prompt("Digite o número da operação desejada: "))
let num1 = Number(prompt("Digite o primeiro número: "))
let num2 = Number(prompt("Digite o segundo número: "))

switch (opcao) {
  case 1:
    console.log("Soma")
    console.log(num1 + num2)
    break;
  case 2:
    console.log("Subtração")
    console.log(num1 - num2)
    break;
  case 3:
    console.log("Multiplicação")
    console.log(num1 * num2)
    break;
  case 4:
    console.log("Divisão")
    console.log(num1 / num2)
    break;
}
