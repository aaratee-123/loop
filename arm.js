// num=int(input("enter the number"))
// # r=0
// # t=num
// # while num>0:
// #     a=num%10
// #     r=r+a**3
// #     num=num//10
// # if t==r:
// #     print("it is armstrong number",r)
// # else:
// #     print("it is not armstrong number",r)

let a=require("readline-sync")
var num=a.questionInt("enter the number")
sum=0
t=num
while (num>0){
    let rem=num%10
    sum=sum+rem**3
    num=parseInt(num/10);
    console.log(sum)
}if (t==sum){
    console.log("it is armstrong number",sum)
}else{
    console.log("it is not armstrong number",sum)
}


