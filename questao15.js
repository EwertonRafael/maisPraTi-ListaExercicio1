let num1 = 0
let num2 = 1
for (let i = 0; i <= 10; i++) {
  let num = 0
  if (i == 0) {
    num = 0
  } else if (i == 1) {
    num = 1
  } else {
    num = num1 + num2
    num1 = num2
    num2 = num
  }
  console.log(num)
}