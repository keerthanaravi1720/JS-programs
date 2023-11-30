const readline=require('readline-sync');
let a=readline.question("enter a num");
var ar=[];
var sum=0;
for(i=0;i<a;i++){
     ele=parseInt(readline.question("Enter an array"));
    ar.push(ele);
    sum=sum+ar[i];
    
}
console.log("sum of numbers",+sum);