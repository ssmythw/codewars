function isSortedAndHow(array) {
  const isAscending = () => {
    for (let i = 0; i < array.length; i++) {
      if (array[i + 1] < array[i]) {
        return "no";
      }
    }
    return "yes, ascending";
  };

  const isDescending = () => {
    for (let i = 0; i < array.length; i++) {
      if (array[i + 1] > array[i]) {
        return "no";
      }
    }
    return "yes, descending";
  };

  if (array[1] > array[0]) {
    return isAscending();
  }

  if (array[1] < array[0]) {
    return isDescending();
  }
}

/*

Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.

*/

console.log(isSortedAndHow([1, 2, 3, 4, 5, 6, 7]));
console.log(isSortedAndHow([-15, -6, -2, 1, 4, 5]));
console.log(isSortedAndHow([10, 5, 2, 1, 0, -5, -10]));
console.log(isSortedAndHow([1, 5, 9, 2, 4, 1, 5, 6, 7, 9]));
