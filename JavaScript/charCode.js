let charCode=(char)=>{
let newCharCode= char.charCodeAt(0)-13;
if(newCharCode<65){
    newCharCode = 91-(65-newCharCode);
}
    return newCharCode;
}
result = String.fromCharCode(charCode("C"));
console.log(result);
//SERR=>FREE
//PBQR=>CODE
//PNZC=>CAMP