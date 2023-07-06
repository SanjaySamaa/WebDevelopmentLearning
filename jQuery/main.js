//using call for using jquery or javascript when document is loaded
// $("document").ready(function(){
    //     $("h1").css("color","blue")
    // });

    $("button").css("color","red");
    console.log($("a").attr("href"));//to get the value
    //always remember one parameter is for getting the value and double parameter is to set the value to given first parameter
    // $("a").attr("href","https://www.facebook.com");
    // $("document").ready(function(){$("a").toggleClass("huge");});

    // $("button").click(function (){
    //     $("button").addClass("huge");
    //     setTimeout(() => {
    //         $("button").removeClass("huge");
    //     }, 100);
    // })

        //to add event listner to keyboard with jQuery just replace .click method with .keypress method
        $("input").keypress(function(e){
            console.log(e.key);
            $("h1").text("you have entered "+e.key+" in your keyboard");
        });
    $("h1").on("mouseover",function(){
        $("h1").css("color","blue");
        setTimeout(() => {
            $("h1").css("color","black");
        }, 1000);
    })
    //adding button before h1
    $("h1").before("<button> click </button>")
    //you can also use .after method to add element after h1
    $("h1").after("<button> click </button>")
    //likewise you can also use prepend and append to insert element left of h1 or right of h1 respectively
    $("h1").prepend("<button> click </button>")//before h1 content inside h1 tag
    $("h1").append("<button> click </button>")//after h1 content inside h1 tag
    // $("h1").remove();//to remove all the button
    $("button").on("click",function(){
        $("h1").slideUp().slideDown().fadeOut().fadeIn().animate({opacity:0.5});//all can be done sepeately and also have toggle option like slideToggle(); and in animate we can only use properties with number value
    });