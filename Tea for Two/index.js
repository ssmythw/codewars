function tea42(input) {
  let inp = input.toString();
  return inp.replace(/2/g, "t");
}

console.log(tea42("2ea"));
