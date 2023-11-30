const readline = require('readline-sync');
let num= readline.question("Enter a num?");
if(num%2==0){
    console.log("num is even")
}
else{
    console.log("num is odd")
}