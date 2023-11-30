const readline=require('readline-sync');
var num=readline.question("Enter a limit");
sum=0;
function odd(num){
for(let i=1;i<=num;i+=2)
sum+=i;
return sum;
}
const x=odd(num);
console.log(x);

