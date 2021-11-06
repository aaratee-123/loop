
var a=require("readline-sync")
var num=a.questionInt("enter the number")
temp=num
sum=0
while (num>0){
    a=num%10
    sum+=(a*a)
    num=parseInt(num/10)
    
}if (sum==1){
    console.log("happy number",sum)
}else{
    console.log(" not nohappy number",sum)
}