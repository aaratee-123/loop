// let a=require("readline-sync")
// var num=a.questionInt("enter the number")
// for(i=1;i<11;i++){
//     m=num*i
//     console.log(num+"*"+i,"=",m)
// }

let a=require("readline-sync")
var num=a.questionInt("enter the number")
if (num>0){
    console.log("it is positive",num)
}else if(num<0){
    console.log("it is negative",num)
}else{
    console.log("it is zero",num)
}