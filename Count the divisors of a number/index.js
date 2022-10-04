function getDivisorsCnt(n) {
  const divisors = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }
  return divisors.length;
}

console.log(getDivisorsCnt());

// Test.assertEquals(getDivisorsCnt(1) , 1);
// Test.assertEquals(getDivisorsCnt(10) , 4);
// Test.assertEquals(getDivisorsCnt(11) , 2);
// Test.assertEquals(getDivisorsCnt(54) , 8);
