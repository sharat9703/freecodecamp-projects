/*
Roman Numeral Converter

Convert the given number into a roman numeral  
Roman numerals 	Arabic numerals
  M                  1000
  CM                  900
  D                   500
  CD                  400
  C 	              100
  XC                   90
  L 	               50
  XL 	               40
  X 	               10
  IX 	                9
  V 	                5
  IV 	                4
  I 	                1

All roman numerals answers should be provided in upper-case  
*/
function convertToRoman(num) {
  let ans = "";
  let str = num.toString();
  let places = str.length;

  if (places == 4) {
    if (Number(str[0]) < 4) {
      for (let i = 0; i < Number(str[0]); i++) {
        ans += "M";
      }
    }
    if (Number(str[1] == 9)) {
      ans += "CM";
    }
    if (Number(str[1] < 9 && Number(str[1]) > 5)) {
      ans = ans + "D";
      for (let i = 0; i < Number(str[1]) - 5; i++) {
        ans += "C";
      }
    }
    if (Number(str[1]) == 5) {
      ans += "D";
    }
    if (Number(str[1]) == 4) {
      ans += "CD";
    }
    if (Number(str[1] > 0 && Number(str[1]) < 4)) {
      for (let i = 0; i < Number(str[1]); i++) {
        ans += "C";
      }
    }
    if (Number(str[1] == 0)) {
      ans += "";
    }

    //...
    if (Number(str[2]) == 9) {
      ans += "XC";
    }
    if (Number(str[2]) < 9 && Number(str[2]) > 5) {
      ans += "L";
      for (let i = 0; i < Number(str[2]) - 5; i++) {
        ans += "X";
      }
    }
    if (Number(str[2]) == 5) {
      ans += "L";
    }
    if (Number(str[2] == 4)) {
      ans += "XL";
    }
    if (Number(str[2] < 4)) {
      for (let i = 0; i < Number(str[2]); i++) {
        ans += "X";
      }
    }
    if (Number(str[2] == 0)) {
      ans += "";
    }
    if (Number(str[3] == 9)) {
      ans += "IX";
    }
    if (Number(str[3]) < 9 && Number(str[3]) > 5) {
      ans += "V";
      for (let i = 0; i < Number(str[3]) - 5; i++) {
        ans += "I";
      }
    }
    if (Number(str[3] == 5)) {
      ans += "V";
    }
    if (Number(str[3] == 4)) {
      ans += "IV";
    }
    if (Number(str[3] < 4)) {
      for (let i = 0; i < Number(str[3]); i++) {
        ans += "I";
      }
    }
    if (Number(str[3]) == 0) {
      ans += "";
    }
  } else if (places == 3) {
    if (Number(str[0] == 9)) {
      ans += "CM";
    }
    if (Number(str[0] < 9 && Number(str[0]) > 5)) {
      ans = ans + "D";
      for (let i = 0; i < Number(str[0]) - 5; i++) {
        ans += "C";
      }
    }
    if (Number(str[0]) == 5) {
      ans += "D";
    }
    if (Number(str[0]) == 4) {
      ans += "CD";
    }
    if (Number(str[0] > 0 && Number(str[0]) < 4)) {
      for (let i = 0; i < Number(str[0]); i++) {
        ans += "C";
      }
    }
    if (Number(str[0] == 0)) {
      ans += "";
    }
    if (Number(str[1]) == 9) {
      ans += "XC";
    }
    if (Number(str[1]) < 9 && Number(str[1]) > 5) {
      ans += "L";
      for (let i = 0; i < Number(str[1]) - 5; i++) {
        ans += "X";
      }
    }
    if (Number(str[1]) == 5) {
      ans += "L";
    }
    if (Number(str[1] == 4)) {
      ans += "XL";
    }
    if (Number(str[1] < 4)) {
      for (let i = 0; i < Number(str[1]); i++) {
        ans += "X";
      }
    }
    if (Number(str[1] == 0)) {
      ans += "";
    }
    if (Number(str[2] == 9)) {
      ans += "IX";
    }
    if (Number(str[2]) < 9 && Number(str[2]) > 5) {
      ans += "V";
      for (let i = 0; i < Number(str[2]) - 5; i++) {
        ans += "I";
      }
    }
    if (Number(str[2] == 5)) {
      ans += "V";
    }
    if (Number(str[2] < 4)) {
      for (let i = 0; i < Number(str[2]); i++) {
        ans += "I";
      }
    }
    if (Number(str[2]) == 0) {
      ans += "";
    }
  } else if (places == 2) {
    if (Number(str[0]) == 9) {
      ans += "XC";
    }
    if (Number(str[0]) < 9 && Number(str[0]) > 5) {
      ans += "L";
      for (let i = 0; i < Number(str[0]) - 5; i++) {
        ans += "X";
      }
    }
    if (Number(str[0]) == 5) {
      ans += "L";
    }
    if (Number(str[0] == 4)) {
      ans += "XL";
    }
    if (Number(str[0] < 4)) {
      for (let i = 0; i < Number(str[0]); i++) {
        ans += "X";
      }
    }
    if (Number(str[0] == 0)) {
      ans += "";
    }
    if (Number(str[1] == 9)) {
      ans += "IX";
    }
    if (Number(str[1]) < 9 && Number(str[1]) > 5) {
      ans += "V";
      for (let i = 0; i < Number(str[1]) - 5; i++) {
        ans += "I";
      }
    }
    if (Number(str[1] == 5)) {
      ans += "V";
    }
    if (Number(str[1] == 4)) {
      ans += "IV";
    }
    if (Number(str[1] < 4)) {
      for (let i = 0; i < Number(str[1]); i++) {
        ans += "I";
      }
    }
    if (Number(str[1]) == 0) {
      ans += "";
    }
  } else if (places == 1) {
    if (Number(str[0] == 9)) {
      ans += "IX";
    }
    if (Number(str[0]) < 9 && Number(str[0]) > 5) {
      ans += "V";
      for (let i = 0; i < Number(str[0]) - 5; i++) {
        ans += "I";
      }
    }
    if (Number(str[0] == 5)) {
      ans += "V";
    }

    if (Number(str[0] == 4)) {
      ans += "IV";
    }
    if (Number(str[0] < 4)) {
      for (let i = 0; i < Number(str[0]); i++) {
        ans += "I";
      }
    }
    if (Number(str[0]) == 0) {
      ans += "";
    }
  }
else{
  return "Please enter a number between 1 and 3999";
}
  return ans.trim();
}
let result = convertToRoman(2999);
console.log(result);

//any number from 1 to 3999  ...
