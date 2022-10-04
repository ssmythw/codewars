function hammingDistance(a, b) {
  let total = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) total++;
  }
  return total;
}

console.log(hammingDistance("100101", "101001"));
console.log(hammingDistance("1010", "0101"));
console.log(hammingDistance("100101011011010010010", "101100010110010110101"));
/*
The hamming distance of two equal-length strings is the number of positions, in which the two string differ. 
In other words, the number of character substitutions required to transform one string into the other.

For this first Kata, you will write a function hamming_distance(a, b) with two equal-length strings containing only 
0s and 1s as parameters. There is no need to test the parameters for validity 
(but you can, if you want).The function's output should be the hamming distance of the two strings as an integer.
*/

/*
	doTest('', '', 0)
	doTest('100101', '101001', 2)
	doTest('1010', '0101', 4)
	doTest('100101011011010010010', '101100010110010110101', 9)
*/
