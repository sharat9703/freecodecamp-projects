/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/
function rot13(str) {
  let str1 = str.toUpperCase().replace(/\s/g, "-");
  let arr = str1.split(" ");
  let newArr = [];

  let keepSpecialCharactersAndDecipher = (char) => {
    let charCode = (char) => {
      let newCharCode = char.charCodeAt(0) - 13;
      if (newCharCode < 65) {
        newCharCode = 91 - (65 - newCharCode);
      }
      return newCharCode;
    };

    let i = String.fromCharCode(charCode(char));
    if (char == "." || char == "!" || char == "?") i = char;

    return i;
  };

  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr[j].length; i++) {
      newArr.push(keepSpecialCharactersAndDecipher(arr[j][i]));
    }
  }
  return newArr.join("").replace(/\:/g, " ");
}
let result = rot13("SERR CVMMN!");
console.log(result);
