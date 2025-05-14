let prompt = require("prompt-sync")();
let num = Number(prompt("Digite um número: "))
let soma = 0
let i = 0
while (num != 0) {
  soma += num
  num = Number(prompt("Digite um número: "))
  i++
}
if (i == 0) {
  console.log("Nenhum número foi digitado")
}else{
  console.log(soma / i)
}