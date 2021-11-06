// num=int(input("enter the number"))
// f=1
// sum=0
// while num>0:
//     f=f*num
//     num=num-1
// print("factorial",f)
var a=require("readline-sync")
var num=a.questionInt("enter the number")
f=1
while (num>0){
    f=f*num
    num=num-1
}console.log("factorial of number is:",f)