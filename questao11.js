let prompt = require("prompt-sync")();
let soma = 0
for (let i = 1; i <= 5; i++) {
  num = Number(prompt("Digite um número: "))
  soma += num
}
console.log(soma)