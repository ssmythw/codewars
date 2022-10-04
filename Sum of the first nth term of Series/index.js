function SeriesSum(n) {
  let sum = 1;
  let counter = 4;

  for (let i = 1; i < n; i++) {
    sum += 1 / counter;
    counter = counter + 3;
  }

  return sum.toFixed(2);
}

console.log(SeriesSum(4));

// Test.assertEquals(SeriesSum(1), "1.00")
// Test.assertEquals(SeriesSum(2), "1.25")
// Test.assertEquals(SeriesSum(3), "1.39")
// Test.assertEquals(SeriesSum(4), "1.49")
