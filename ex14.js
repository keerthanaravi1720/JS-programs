const readline=require("readline-sync");
function getoddnumber(arr){
    var odd=arr.filter((num) =>num%2!==0)
    return odd
}
  function Doubleelements(arr){
    return arr.map((num) =>num*2);
  }
  function Sumelements(arr){
    return arr.reduce((sum,num) =>sum+parseInt(num),0)

  }

  const number=[];
  for(i=0;i<3;i++)
  {
    number[i]=readline.question("Enter the num");
  }
  const oddnumber= getoddnumber(number);
  console.log("odd number",oddnumber);

  const Double= Doubleelements(number);
  console.log("Double",Double);

  const sum= Sumelements(number);
  console.log("Sum",sum);

