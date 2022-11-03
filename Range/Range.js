function range(start, end, step) {
  let arr = [];
  for (let i = 0; i < end + step; i + step) {
    arr.push(i);
  }
  console.log(arr);
}

console.log(range(0, 10, 2));

/*
range(0, 10, 2);	[ 0, 2, 4, 6, 8, 10 ]
range(10, 30, 5);	[ 10, 15, 20, 25, 30 ]
range(-5, 2, 3);	[ -5, -2, 1 ]
 */
