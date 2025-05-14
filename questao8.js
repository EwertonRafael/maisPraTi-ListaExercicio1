let prompt = require("prompt-sync")();
let num1 = Number(prompt("Digite o primeiro número: "))
let num2 = Number(prompt("Digite o segundo número: "))
if (num1 == num2) {
  console.log("Os valores iguais não podem ser ordenados")
}else if (num1 < num2) {
  console.log(num1, num2)
} else {
  console.log(num2, num1)
}