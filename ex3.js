const readline=require('readline-sync');
let n1=readline.question("enter a limit");
sum=0;
function odd(n1){
    for(let i=0;i<=n1;i+=2)
    sum+=i;
    return sum;
    }
    var x=odd(n1);
    console.log(x)
     


