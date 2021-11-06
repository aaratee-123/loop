i=1
sum=0
var a=require("readline-sync")
var num=a.questionInt("enter the number")
temp=num
while (i<num){
    if (num%i==0){
        sum=sum+i
    }i=i+1
}if (sum==temp){
    console.log(i,"it is perfect number")
}else{
    console.log(i,"it is not perfect number")
}
