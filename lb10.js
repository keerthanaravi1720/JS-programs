const readline= require('readline-sync');
let limit= parseInt(readline.question("enter an array limit"));
let arr1=[];
for(i = 1; i <= limit ;i++){
arr1.push(readline.question("first array"))
}
let limit2=parseInt(readline.question("enter an array"));
let arr2=[];
for(i = 1;i <= limit2 ;i++)
{
arr2.push(readline.question("second array elements"))
}
[arr1,arr2]=[arr2,arr1]
console.log("Swapped array" ,arr1 );
console.log("Swapped array" ,arr2 );


