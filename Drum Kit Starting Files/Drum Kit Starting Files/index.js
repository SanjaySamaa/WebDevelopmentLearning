var i=0;
var button = document.querySelectorAll(".drum");
while(i<button.length){
button[i].addEventListener("click",function(){
    alert("i am being clicked");
});
i++;
}

