const readline=require('readline-sync');
const array=[1, 2, 3, 4 ,5,6];
let count=0;
for( let i = 0; i <= array.length; i++){
if(array[i]%2==0)
{
    
    count++;
}
}
console.log(count);