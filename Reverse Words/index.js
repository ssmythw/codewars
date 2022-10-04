function reverseWords(str) {
  let pointer = 0;
  let newWord = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " " || i == str.length - 1) {
      console.log("Stop here and reverse the previous word");
      const reversed = str.split("").splice(pointer, i).reverse().join("");
      pointer = i;
      newWord += reversed + " ";
    }
  }
  console.log(newWord);
}

// Complete the function that accepts a string parameter, and reverses each word in the string.
// All spaces in the string should be retained.
// ex)  "This is an example!" ==> "sihT si na !elpmaxe"
// ex2) "double  spaces"      ==> "elbuod  secaps"

//reverseWords("apple");
reverseWords("apple pie is good for you");
//reverseWords("a b c d");
//reverseWords("double  spaced  words");
