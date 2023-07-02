// function bottleToBuy(money){
//     var price = 50;
//     var numberOfBottels = Math.floor(money / price);
//     console.log("you can buy "+numberOfBottels+" bottles of milk.");
//     return money % price;
// }
// console.log("you have change of "+bottleToBuy(205));
// var weight = prompt("enter the weight is kg");
// var height = prompt("enter the height in meter");
// function bmiCalculator(weight,height){
//   var bmi = Math.round(weight/(Math.pow(height,2)));
//   return bmi;
// }
// alert(bmiCalculator(weight,height));

// function randomNumber(){
//   var rand = Math.ceil(Math.random()*100);
//   return rand;
// }

// var name = prompt("enter your name");
// var pname=prompt("enter the name of your partner or crush");

// console.log("Love percentage of "+name+" and "+pname+" is "+randomNumber()+" %");
// function randomNumber(){
//   var rand = Math.ceil(Math.random()*2);
//   return rand;
// }
// for( i=0;i<=10000;i++){
//   var ran = randomNumber();
//   if(ran == 0){
//     alert("0 came in the code");
//     break;
//   }
// }
// function myPlan(){
//   var msg = "hello welcome to the jungle ";
//   alert(msg);
// }
// myPlan();
// function leapChecker(leap){
//   var result;
//   if(leap % 4 === 0 && leap % 400 === 0 && leap % 100 !== 0){
//     result = true;
//   }else{
//     result =false;
//   }
//   return result;
// }
//   console.log(leapChecker(2000));
// function leapChecker(leap){
//   var result;
//   if(leap % 4 === 0 && leap % 100 !== 0 || leap % 400 === 0){
//     result = true;
//     }else{
//     result = false;
//   }
//   return result;
// }
//   console.log(leapChecker(2000));
// var invitedPeople = ["khuile","kattu","penty","chuse","budo man","tantey"];
// var name = prompt("hi please enter your name");
// if(invitedPeople.includes(name)){
//   alert("welcome");
// }else{
//   alert("better luck next time");
// }
// var number = [];

// var count = 1;

// function numPush(){
//  while(count <= 100){   
// if(count%3===0 && count%5 ===0){
//     number.push("fizzbuzz");
//     count++;
// }else if(count%3===0){
//     number.push("fizz");
//     count++;
// }else if(count % 5 === 0 ){
//     number.push("buzz");
//     count++;
// }else{ 
//     number.push(count);
//     count++;
//     }
    
// }}
// numPush();
// console.log(number)
// var number = [1,2,3,4,5];
// var rand = Math.floor(Math.random()*number.length);
// console.log(rand);
// var count = 99;
// function song(count){
// while(count >0){
    
//     if(count === 1){
//          console.log(count+" bottles of beer on the wall, "+count+" bottles of beer. \nTake one down and pass it around, no bottles of beer on the wall.");       
//     }else{
//         console.log(count+" bottles of beer on the wall, "+count+" bottles of beer. \nTake one down and pass it around, "+(count-1)+" bottles of beer on the wall.");
//         }
//     count--;
// }}
// song(count);
// function fibonacciSeries(n){
//     var result = [];
//     for(var i = 0;i<n;i++){
//         if(i===0 || i===1){
//             result.push(i);
//         }else{
//             result.push(result[i-1]+result[i-2]);
//         }
//     }
//     return result;
// }
// console.log(fibonacciSeries(10));
// sdafsd