var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern=[];
var isStart = false;
var level = 0;
$(".btn").on("click",function(e){
    var userChoosenColor = e.target.id;//this.attr.id
    userClickedPattern.push(userChoosenColor);
    playSound(userChoosenColor);
    animatePress(userChoosenColor);
    checkAnswer(userClickedPattern.length-1);
 
   
});
$(document).keypress(function(){
    if(isStart === false){
        nextSequence();
        isStart = true;
    }
});
function nextSequence(){
    level++;
    userClickedPattern = [];
    $("h1").text("Level : "+level);
    randomNumber = Math.floor(Math.random()*4);
    // console.log(randomNumber);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function playSound(name){
    var sound = new Audio("./sounds/"+name+".mp3");
    sound.play();
}
function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    },100);
}
function checkAnswer(currentLevel){
    console.log(currentLevel);
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
        // console.log("sucesss");
        // console.log(gamePattern +"\n"+ userClickedPattern )
        if(userClickedPattern.length === gamePattern.length){
        setTimeout(nextSequence,1000);
        // userClickedPattern = [];
    }
    }else{
        playSound("wrong");
        // console.log("failed")
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("h1").text("Game Over, Press Any Key To Restart")
        startOver();
      
    }
}
function startOver (){
    isStart = false;
    gamePattern = [];
    level = 0;
    

}
