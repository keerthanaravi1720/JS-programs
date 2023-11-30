const readline=require('readline-sync');
let x=readline.question("enter a string");
const x2 = x.split('').reverse('').join('');
   if(x==x2){
    console.log(x);

   }
  else{
    console.log("not a palindrome");
  }

   