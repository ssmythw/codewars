function isIsogram(str) {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    if (arr.includes(str[i].toLowerCase())) {
      return false;
    } else {
      arr.push(str[i].toLowerCase());
    }
  }
  return true;
}

console.log(isIsogram("Tree"));
console.log(isIsogram("Mexican"));
console.log(isIsogram("MoOse"));
console.log(isIsogram("Infadel"));

/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that 
determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
*/
