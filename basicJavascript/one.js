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
// function divide(num1,num2){
    //     return num1/num2;
    // }
    // function multiply(num1,num2){
    //     return num1*num2;
    // }
    // function add(num1,num2){
    //     return num1+num2;
    // }
    // function subtract(num1,num2){
    //     return num1-num2;
    // }
    // function calculator (num1,num2,operator){
    //     return operator(num1,num2);
    // }
    // calculator(5,5,add);
    // function anotherAddEventListener(typeOfEvent,callBack){
    //     var obj = {
    //         eventType : "click",
    //         duration : 2,
    //         key : "a"
    //     }
    //     if(obj.eventType === typeOfEvent){
    //         callBack(obj.eventType);
    //     }
    // }
    // anotherAddEventListener("click",function(e){
    //     console.log(e);
    // })
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
// function divide(num1,num2){
//     return num1/num2;
// }
// function multiply(num1,num2){
//     return num1*num2;
// }
// function add(num1,num2){
//     return num1+num2;
// }
// function subtract(num1,num2){
//     return num1-num2;
// }
// function calculator (num1,num2,operator){
//     return operator(num1,num2);
// }
// calculator(5,5,add);
// var engineer = {
//     name:"ram",
//     age:"40",
//     number:"9828192819",
//     languager:["english","nepali"],
//     experienceYear:12
    
// }
// console.log(engineer.experience);
// function Engineer (name,age,yearsOfExperience){
//     this.name = name;
//     this.age = age;
//     this.yearsOfExperience = yearsOfExperience;
//     this.buildBridge = function () {
//         console.log("builded");
//     }
// }
// var e1 = new Engineer("ram",20,12);
// var e2 = new Engineer("shyam",15,2);

// function cB(typeOfEvent,cb){

//     var obj = {
//         eventType : "click",
//         duration : 2
//     };
//         if(typeOfEvent === obj.eventType){
//             cb(obj);
//         }

// }
//     (cB("click",function(e){
//     console.log(e);
// }));


// function Engineer(name,age,yearsOfExperience){
//     this.name = name;
//     this.age = age;
//     this.yearsOfExperience = yearsOfExperience;
//     this.job = function (){
//         console.log("buildied")
//     }
// }

// var e1 = new Engineer("ram",20,12);
// console.log(e1.job);