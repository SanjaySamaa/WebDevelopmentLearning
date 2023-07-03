function randomNumber(){
    var random = Math.ceil(Math.random()*6);
    return random;
}

function play(){
    var playerOneScore = randomNumber();
    var playerTwoScore = randomNumber();
    if(playerOneScore === playerTwoScore){
        document.querySelector(".container h1").textContent="Draw";
    }else if(playerOneScore > playerTwoScore){
        document.querySelector(".container h1").textContent="Player One Wins ";
    }else{
        document.querySelector(".container h1").textContent="Player Two Wins";
    }
    var text;
    if(playerOneScore === 1 ){
        text = "dice1"
    }else if(playerOneScore === 2 ){
        text = "dice2"
    }else if(playerOneScore === 3 ){
        text = "dice3"
    }else if(playerOneScore === 4 ){
        text = "dice4"
    }else if(playerOneScore === 5 ){
        text = "dice5"
    }else{
        text = "dice6"
    }
    var text2;
    if(playerTwoScore === 1 ){
        text2 = "dice1"
    }else if(playerTwoScore === 2 ){
        text2 = "dice2"
    }else if(playerTwoScore === 3 ){
        text2 = "dice3"
    }else if(playerTwoScore === 4 ){
        text2 = "dice4"
    }else if(playerTwoScore === 5 ){
        text2 = "dice5"
    }else{
        text2 = "dice6"
    }
    document.querySelector(".img1").setAttribute("src","./images/"+text+".png");
    document.querySelector(".img2").setAttribute("src","./images/"+text2+".png");
} 
document.querySelector("body").onload = play();
