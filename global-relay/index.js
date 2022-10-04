// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  count = 0;

  for (let i = 0; i < S.length; i++) {
    console.log(S[i]);
    if (S[i] === "b") {
      count++;
    }
    if (count > 0 && S[i] === "a") {
      console.log("here");
      return false;
    }
  }
  return true;
}

console.log(solution("aabbb"));
console.log(solution("ba"));
console.log(solution("aaaa"));
console.log(solution("b"));
console.log(solution("abba"));
