const readline=require("readline-sync")
var ar=[];
var b=[];
let size=readline.question("Enter an element:");
 for(i=0;i<size;i++){
    ele=readline.question("Enter an element:");
    ar.push(ele);
    if(ar[i]>=0)
    {
b.push(ar[i]);
    }
 }

console.log(b);
