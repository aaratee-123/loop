let a=require("readline-sync")
var num=a.questionInt("enter the number")
temp=num
sum=0
while (num){
    i=1
    f=1
    r=num%10
    while (i<=r){
        f=f*i
        i=i+1
    sum=sum+f
    num=parseInt(num/10)
}
}if (sum==temp){
    console.log("it is a strong number",sum)
}else{
    console.log("it is not strong number",sum)
}