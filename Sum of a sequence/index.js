const sequenceSum = (begin, end, step) => {
  let sum = 0;

  for (let i = begin; i <= end; i = i + step) {
    sum += i;
  }

  console.log(sum);
};

sequenceSum(2, 2, 2);
sequenceSum(2, 6, 2);
sequenceSum(1, 5, 1);
sequenceSum(1, 5, 3);
