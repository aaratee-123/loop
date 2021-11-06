var a=require("readline-sync")
var target_number=5;
// let Guessing_number=a.questionInt("enter the the number between 1 to 10:")
for(i=1;i<=10;i++){
    let Guessing_number=a.questionInt("enter the the number between 1 to 10:")
    if (Guessing_number==target_number){
        console.log("Wow you guessed the correct number")
        break;

    }else if(Guessing_number<target_number){
        console.log("Number entered by you entered is small, try one more time")
    }else{
        console.log("Number entered by you entered is greater, try one more time.")
    }if (i==5){
        break;
    }
}


