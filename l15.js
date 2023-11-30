
var f=(n)=>{
    if(n<=1){
        return n
    }
    return f(n - 1) + f(n - 2)
}
var n=10;
var a=f(n);
console.log(a);

 