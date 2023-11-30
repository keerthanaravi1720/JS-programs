const readline =require('readline-sync');
var stud=readline.question("Enter mark");
if(stud>=70 && stud<=100){
    console.log("Grade A")
}
else if(stud>=60 && stud<=69){
    console.log("Grade B")
}
else if(stud>=50 && stud<=59){
    console.log("Grade C");
}
else{
    console.log("Grade F");
}