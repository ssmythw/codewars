function highAndLow(numbers) {
  let arr = numbers.split(" ").map((num) => {
    return parseInt(num);
  });
  console.log(arr);
  let max = Number.MIN_VALUE;
  let min = Number.MAX_VALUE;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }

  return `${max} ${min}`;
}

console.log(highAndLow("1 2 3 4 5")); // return "5 1"
console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"
