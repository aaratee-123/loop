const a=require("readline-sync")
var string=a.question("enter the string")
var temp=string
var str=""
for(i=string.length-1;i>=0;i--){
    str=str+string[i]
}
if (temp==str){
    console.log("it is palidrome",str)
}else{
    console.log("it is not palidrome",str)
}
