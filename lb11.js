const readline=require('readline-sync');
let num=readline.question("Enter a number");

const arr= [ 1, 2, 3, 4, 5 ,6] ;

for( let i = 0; i <= arr.length; i++){
    if(arr%2==0)
    arr++;
}

console.log(num);