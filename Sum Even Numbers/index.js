function sumEvenNumbers(input) {
  let sum = 0;
  for (let i = 0; i <= input.length; i++) {
    if (input[i] % 2 === 0) {
      sum += input[i];
    }
  }
  return sum;
}

console.log(sumEvenNumbers([4, 3, 1, 2, 5, 10, 6, 7, 9, 8]));
