// ****Guessing Game****
var a=require("readline-sync")
var target_number=5;
// let Guessing_number=a.questionInt("enter the the number between 1 to 10:")
i=0
for(i=1;i<=10;i++){
    let Guessing_number=a.questionInt("enter the the number between 1 to 10:")
    if (Guessing_number==target_number){
        console.log("you win the game!")
        break;

    }else{
        console.log("appear agian")
    }if(i==5){
        break;
    }
}


