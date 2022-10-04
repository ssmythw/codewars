function generateShape(integer) {
  let str = "";

  for (let j = 0; j < integer; j++) {
    for (let i = 0; i < integer; i++) {
      str += "+";
    }
    if (j !== integer) {
      str += "\n";
    }
  }

  return str;
}

//Build a square with +'s!!!

// generateShape(4);
console.log(generateShape(4));
