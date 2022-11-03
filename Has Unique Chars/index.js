function hasUniqueChars(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (arr.includes(str[i])) {
      return false;
    } else {
      arr.push(str[i]);
    }
  }
  return true;
}

console.log(hasUniqueChars("asdfghjkl;zxcvbnm,ertyuio"));
