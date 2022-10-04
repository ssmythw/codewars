function convertPalindromes(numbers) {
  let arr = [];
  for (let i = 0; i < numbers.length; i++) {
    let reversed = numbers[i].toString().split("").reverse().join("");
    console.log(reversed + "::::" + numbers[i]);
    if (reversed == numbers[i]) {
      arr.push(1);
    } else {
      arr.push(0);
    }
  }
  console.log(arr);
}

// An array is given with palindromic and non-palindromic numbers.
// A palindromic number is a number that is the same from a reversed order.
// For example 122 is not a palindromic number, but 202 is one.

// Your task is to write a function that returns an array with only 1s and 0s,
//where all palindromic numbers are replaced with a 1 and all non-palindromic numbers are replaced with a 0.

//TESTS

convertPalindromes([22, 303, 76, 411, 89]);
convertPalindromes([653, 808, 5]);
convertPalindromes([4, 23, 441, 565, 19, 818]);
