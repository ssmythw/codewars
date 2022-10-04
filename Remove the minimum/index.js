function removeSmallest(numbers) {
  let smallest = Infinity;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      smallest = numbers[i];
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === smallest) {
      numbers.splice(i, 1);
      break;
    }
  }

  return numbers;
}

removeSmallest([1, 2, 3, 4, 5]);
removeSmallest([2, 2, 1, 2, 1]);
removeSmallest([5, 3, 2, 1, 4]);

// Test.assertSimilar(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
// Test.assertSimilar(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4]);
// Test.assertSimilar(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1]);
// Test.assertSimilar(removeSmallest([]), [], "Wrong result for []");

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements
// with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
