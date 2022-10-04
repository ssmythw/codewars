function squareDigits(num) {
  let str = num.toString();
  let str2 = "";

  for (let i = 0; i < str.length; i++) {
    console.log(parseInt(Math.pow(str[i], 2)));
    str2 += parseInt(Math.pow(str[i], 2));
  }
  return parseInt(str2);
}

console.log(squareDigits(9876532));

/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
*/
