let sum=0;
const number=("enter a number");
let temp=number;
while(temp>0){
    let reminder=temp%10;
    sum+=reminder*reminder*reminder;
    temp=parseInt(temp/10);
}
if(sum==number){
    console.log("${352} is an amstrong number");
}

else{
    console.log("${352}is not an armstrong number");
}