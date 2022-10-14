const xMarksTheSpot = (input) => {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] === "x") {
        return [i, j];
      }
    }
  }
};

let input = [
  ["o", "o", "o", "o", "o", "o", "o", "o"],
  ["o", "o", "o", "o", "o", "o", "o", "o"],
  ["o", "o", "o", "o", "o", "o", "o", "o"],
  ["o", "o", "o", "o", "o", "o", "o", "o"],
  ["o", "o", "o", "o", "o", "o", "x", "o"],
  ["o", "o", "o", "o", "o", "o", "o", "o"],
];

console.log(xMarksTheSpot(input)); // should be 4,6
