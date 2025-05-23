let numbb1 = 0, numbb2 = 1
console.log("10 primeiro números do Fibonacci")
for (let i = 0; i < 10; i++) {
  console.log(numbb1)
  let nextt = numbb1 + numbb2
  numbb1 = numbb2
  numbb2 = nextt
}
