// for (var i=1;i<=100;i++){
//     if (i%3==0 && i%7==0){
//         console.log("Navgurukul")
//     }else if(i%7==0){
//         console.log("gurukul")
//     }else if(i%3==0){
//         console.log("Nav")
//     }else{
//         console.log(i)
//     }
// }
// b="eye"
// temp=b
// t=""
// var i=b.length-1
// while (i>=0){
//     t=t+b[i]+""
//     i=i-1
// }if (temp==t){
//         console.log("palidrome",t,temp)
// }else{
//         console.log("not palidrome",t,temp)
// }

a=['e','y','e']
temp=a
t=''
list=[]
// var j=a.length-1
for(var j=a.length-1;j>=0;j--){
    t=a[j]+''
    // console.log(t)
      
    list.push(t)
}
if (a==list){
    console.log("palidrome",list,a)
}else{
    console.log("not palidrome",list,a)
}