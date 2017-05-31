$(document).ready(function() {
  
  var category = {
        games: { 
         
            0: { Q: "Who is mario's brother0?", 
                  a: { answer: "luigi", result: true, },
                  b: {answer: "blah blah", result: false,},
            },
            1: { Q: "Who is mario's brother1?", 
                  a: { answer: "luigi", result: true, },
                  b: {answer: "blah blah", result: false,},
            },
            2: { Q: "Who is mario's brother2?", 
                a: { answer: "luigi", result: true, },
                b: {answer: "blah blah", result: false,},
            }, 
            3: { Q: "Who is mario's brother3?", 
                a: { answer: "luigi", result: true, },
                b: {answer: "blah blah", result: false,},
            }, 
            4: { Q: "Who is mario's brother4?", 
                  a: { answer: "luigi", result: true, },
                  b: {answer: "blah blah", result: false,},
            }, 
            5: { Q: "Who is mario's brother5?", 
                  a: { answer: "luigi", result: true, },
                  b: {answer: "blah blah", result: false,},
            },
        
        },

        music: {},
        movies:{},
        TV: {},
  }
  
  var player = {
        1: { roundPts: 0, totalPts: 0, img: null, name: "Player One"},
        2: { roundPts: 0, totalPts: 0, img: null, name: "Player Two"},
  }

  var game = {
    //picks random music to be played in the background
    bgMusic: new Audio("assets/sounds/music/bgMusic" + Math.floor(Math.random() * 6) +".mp3"),
    click: new Audio("assets/sounds/click.mp3"),
    currentImg: null,
    playerCount: null,
    categoryPicked: null,
    roundNumber: 1,
    qNumbers: [""],
    imgNumbers: [""],
    question: null,


    // when you click the play button
    play: function(){
      game.random(game.qNumbers, 6, "game.question");
      game.random(game.qNumbers, 6, game.question);
      game.random(game.qNumbers, 6, game.question);
      game.random(game.qNumbers, 6, game.question);
      // game.random(game.imgNumbers, 3, player[2].img);
      console.log(game.currentImg)



      $("body").off();
      //animates the elements
      $("body").animate({"height" : "484px", "margin" : "15px auto"}, 3000);
      $("#bgMain").animate({"height" : "100%"}, 3000);
      $("footer").fadeIn(1000);
      $("#play").fadeOut(1000);

      setTimeout(function(){$("h1").fadeOut("slow")}, 4000);
      //starts the music
      game.bgMusic.volume = .3;
      game.bgMusic.loop = "loop";
      game.bgMusic.play();
      //runs the select method with amount of players argument
      setTimeout( function() { game.select("How Manay Players Will There Be?", ".players", "playerCount")}, 4500);
    },

    random: function(a, b, c){

      var check = 0;
      game.currentImg = Math.floor(Math.random() * b);

      for(var i = 0; check === 0; i++){  
          if (game.currentImg === a[i]){ 
            console.log(game.currentImg)
            console.log(a);
            check = 1;
           } 
      }
       a.push(game.currentImg);

    },

    //selects how many players
    select : function (a, b, c){
      //animates the elements
      $("header").fadeIn("slow");
      $("h2").html(a).fadeIn("slow");

      $(b).fadeIn("slow");
      //sets teh hover effect
      $(b).hover(           
        //what happens when you hover the card
        function(){ 
          $(this).css({"border" : "solid #f00 2px"});
          $("h3").html($(this).attr("value"));
        },
        //what happens when you stop hovering the card
        function(){
          $(this).css({"border" : "solid #000 2px"});
          $("h3").html("");
        });
      //runs when amount of players is clicked
      $(b).on("click", function(){
        //gets the selecteds value
        game[c] = $(this).attr("value").toLowerCase();
        console.log(game[c] + " was selected.");
        //plays click sound
        game.click.volume = .1;
        game.click.play();
        //animates the selected to the left
        $(b).fadeOut("slow");
        //turns off hover and onclick function
        $(b).off();
        $("h3").html("");
        $("h2").fadeOut("slow");
        //runs the select method with categories argument
        if(game.categoryPicked === null){
          setTimeout( function() { game.select("Select The Category.", ".cat", "categoryPicked")}, 500);
        } else {
          setTimeout(game.instructions, 500);
        }
      })
    },

    //selects what category of questions will be asked
    instructions: function() {
      //animates the elements
      $("#bgImage").animate({ "opacity" : ".0"}, 2000);
      $("h2").html("How To Play.").fadeIn("slow");
      $("p").html("Welcome to the Super Fantastic Trivia Game! Here is how it works. Each player will have 10 seconds to answer a Super Fatastic Trivia question. The faster you answer the more points you will recieve. The person with the most points after three rounds wins!").fadeIn("slow");
      
      setTimeout( function(){
        $("h2").fadeOut("slow");
        $("p").fadeOut("slow");
      }, 10000)

     setTimeout( function() { game.ready(1)}, 10500);
    },

    //checks to see what round it is
    ready: function(a){
      $("h2").html( player[a].name + " Get Ready!").fadeIn("slow");
      $(".big").html("<img src='assets/images/" +  player[a].img +".png' id='bigImg'>").fadeIn("slow");
      setTimeout( function() { $("h2, .big").fadeOut("slow")}, 3000);
      setTimeout( function() { game.round(1)}, 3500);
      
    },

    round: function(a){
      $("h2").html("Round " + game.roundNumber).fadeIn("slow");
      $(".small").html("<img src='assets/images/" +  player[a].img +"a.png' id='smallImg'>").fadeIn("slow");
      $(".playerInfo").html(player[a].name + "<br> Score: " + player[a].totalPts).fadeIn("slow");
      $(".container").fadeIn("slow");
      game.random(game.qNumbers, 5, game.question);
      console.log(game.qNumbers);

       // console.log(category[game.categoryPicked][Math.floor(Math.random() * 5)].Q);
    },
  }

  // $(".answerBox").css({"display" : "block"});
  //     setTimeout(function(){$("#choiceA").animate({"width" : "450px"}, 2000)}, 1000);
  //     setTimeout(function(){$("#choiceB").animate({"width" : "450px"}, 2000)}, 1500);
  //     setTimeout(function(){$("#choiceC").animate({"width" : "450px"}, 2000)}, 2000);
  //     setTimeout(function(){$("#choiceD").animate({"width" : "450px"}, 2000)}, 2500);

  // countdown clock
  $("#CountDownTimer").TimeCircles({
    count_past_zero: false,
    total_duration: 10,
    circle_bg_color: "#000",
    time: { Seconds: { color: "#BBFFBB",}}
  });



  // var intervalId;

  // function run() {
  //   intervalId = setInterval(decrement, 1000);
  //   $("#CountDownTimer").TimeCircles().start();
  // }

  // //  The decrement function.
  // function decrement() {
  //   var time = $("#CountDownTimer").TimeCircles().getTime().toFixed();
  //   console.log(time);
  //   //  Once number hits zero...
    
  //   if (time <= 5) {
  //     $("#CountDownTimer").TimeCircles({ time: { Seconds: { color: "#f08f8f"}}});
  //     $("span").css({"color" : "#f08f8f"});
  //     stop();
  //    }    
  // }  
  // //  The stop function
  // function stop() {
  //   clearInterval(intervalId);
  // }


 // //starts the game... 
 //  game.start();
 

$("body").on("click", game.play);

});