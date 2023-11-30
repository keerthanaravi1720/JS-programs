const readline=require('readline-sync');
let student=readline.question("Enter a mark");
if(student>=50){
    console.log("Passed",student);
}
else{
    console.log("failed",student);
}
