var filterString = function (value) {
  //Complete this function :)

  let str = "";

  for (let i = 0; i < value.length; i++) {
    console.log(value[i]);
    if (!isNaN(value[i])) {
      str += value[i];
    }
  }
  return parseInt(str);
};

/*

Filter the number
Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, 
can you return the number back to its original state?

Task
Your task is to return a number from a string.

Details
You will be given a string of numbers and letters mixed up, you have to return all the numbers in that 
string in the order they occur.

*/

console.log(filterString("abc1abc2abv3"));
