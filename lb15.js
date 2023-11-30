
const readline=require("readline-sync");
function getUserinput(){
  var x = parseInt(readline.question("Enter the limit"));
  var array=[];
  for(i=1;i<=x;i++){

  array.push(readline.question("Enter the elements"));
  }
 return array;
}

const  result = getUserinput()
const  gee= SumofOdd(result)
const even= SumofEven(result)




function SumofOdd(result){
   let sum=0;
    for(i=0;i<=result.length;i++){
        if(i%2!==0){
            sum += i;
        }

    }
    return sum;
    }

console.log(gee);

function SumofEven(result){
    let sum=0;
    for(i=0;i<result.length;i++){
        if(i%2==0){
        sum += i;
    }
    }
return sum;
}
console.log(even);

console.log(result);