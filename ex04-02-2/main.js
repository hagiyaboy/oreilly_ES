"use strict";

let s = "3";
for(; s.length<10; s = " " + s){
    console.log(s);
}

for(let x=0.2; x<3.0; x+=0.2){
    console.log(x);
}

let num = 1;
if(num === 0) console.log("ifの条件が一致")
else if(num === 1) console.log("javascriptでelse ifが使える")
else if(num === 2) console.log("条件が合致しないもうひとつのelse ifを追加")
else console.log("elseの条件が一致")