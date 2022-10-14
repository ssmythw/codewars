function DNAStrand(dna) {
  let newStr = "";

  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "A") newStr += "T";
    if (dna[i] === "T") newStr += "A";
    if (dna[i] === "G") newStr += "C";
    if (dna[i] === "C") newStr += "G";
  }
  return newStr;
}

DNAStrand("ATTGCATCGA");

/*
In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one 
side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is 
never empty or there is no DNA at all (again, except for Haskell).In DNA strings, symbols "A" and "T" are 
complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); 
you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
*/

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"
