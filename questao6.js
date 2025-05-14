let prompt = require("prompt-sync")();
let lado1 = Number(prompt("Digite o primeiro lado: "))
let lado2 = Number(prompt("Digite o segundo lado: "))
let lado3 = Number(prompt("Digite o terceiro lado: "))
if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2) {
  if (lado1 == lado2 && lado2 == lado3) {
    console.log("Equilatero")
  } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
    console.log("Isosceles")
  } else {
    console.log("Escaleno")
  }
} else {
  console.log("Os lados fornecidos nao formam um triangulo")
}