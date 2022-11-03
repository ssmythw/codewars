function nthSmallest(arr, pos) {
  // iterate through the array and remove the smallest number
  // do this pos times and then return the value on the pos iteration

  let smallest = Infinity;
  let counter = 1;

  while (counter <= pos) {
    smallest = Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) smallest = arr[i];
    }
    if (counter === pos) {
      return smallest;
    }
    const index = arr.indexOf(smallest);
    arr.splice(index, 1);
    counter++;
  }
}

// Given an array/list of integers, find the Nth smallest element in the array.

console.log(nthSmallest([-102, -16, -1, -2, -367, -9], 5));
