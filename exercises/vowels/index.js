// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;

//Solution 1
//  let res = 0;
//  for (let i = 0; i < str.length; i++) {
//    if (
//      str[i].toLowerCase() === 'a' ||
//      str[i].toLowerCase() === 'e' ||
//      str[i].toLowerCase() === 'i' ||
//      str[i].toLowerCase() === 'o' ||
//      str[i].toLowerCase() === 'u'
//    ) {
//      res++;
//    }
//  }
//  return res;

// Solution 2
//  let res = 0;
//   let vowels = ['a', 'e', 'i', 'o', 'u']; ||  "aeiou"
//   for (let char of str.toLowerCase()) {
//     if (vowels.includes(char)) {
//       res++;
//     }
//   }
//   return res;
