let fs = require("fs");
fs.writeFileSync("myCode.txt","Hi from Node.js",()=>{
   return  console.log("task is done");
});