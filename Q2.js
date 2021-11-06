const a=require("readline-sync")
let num=a.questionInt("enter the number")
count=0
i=1
while (i<=num){
    if (num%i==0){
        count=count+1
    }i=i+1
}if (count==2){
    console.log("it is prime number",num)
}else{
    console.log("it is not prime number",num)
}
















