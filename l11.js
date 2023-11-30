const readline=require("readline-sync")
let a=readline.question("Enter a num:");
var ar=[];
var sum=0;
var avg=0;

for(i=0;i<a;i++){
    ele=parseInt(readline.question("enter an array"));
    ar.push(ele);
    sum+=ar[i];
avg=sum/ar.length;
   
    
}
console.log(avg);