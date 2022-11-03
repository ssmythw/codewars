function search(budget, prices) {
  let arr = [];

  prices.forEach((price) => {
    if (price <= budget) arr.push(price);
  });
  arr = arr.sort((a, b) => {
    return a - b;
  });
  return arr.join(",");
}

search(14, [7, 3, 23, 9, 14, 20, 7]);
