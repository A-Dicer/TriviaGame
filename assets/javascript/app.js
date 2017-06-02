$(document).ready(function() {
  
  var clock;
  
  function stopClock(){clearTimeout(clock);};     
  //object for the questions based on category
  var category = {
        games: { 
            0: { Q: "Which of the following is not the name of a ghost in the arcade game Pac-Man?",
                  a: {answer: "Pinky",  result: false, },
                  b: {answer: "Winky",  result: true,  },
                  c: {answer: "Blinky", result: false, },
                  d: {answer: "Clyde",  result: false, },
            },
            1: {  Q: "The Gameboy Color was first released by Nintendo in which year?",
                  a: {answer: "1992", result: false, },
                  b: {answer: "1998", result: true,  },
                  c: {answer: "1995", result: false, },
                  d: {answer: "2001", result: false, },
            },
            2: {  Q: "This coin-operated arcade video game was a movie tie-in and was distributed by Disney Interactive Studios in 1981.",
                  a: {answer: "Dron", result: false, },
                  b: {answer: "Pron", result: false, },
                  c: {answer: "Tron", result: true,  },
                  d: {answer: "Kron", result: false, },
            }, 
            3: {  Q: "What is the name of the artificial intelligence (AI) companion of Master Chief John-117 in the Halo franchise?", 
                  a: {answer: "Alexa",    result: false, },
                  b: {answer: "Korey",    result: false, },
                  c: {answer: "Hal 9000", result: false, },
                  d: {answer: "Cortana",  result: true,  },
            }, 
            4: {  Q: "The 2015 League of Legends World Championship final was held in which city?", 
                  a: {answer: "Brussels, Belgium", result: false, },
                  b: {answer: "Paris, France",     result: false, },
                  c: {answer: "Berlin, Germany",   result: true,  },
                  d: {answer: "London, England",   result: false, },
            }, 
            5: {  Q: "The phrase “You have died of dysentery” is synonymous with which educational computer game?", 
                  a: {answer: "The Oregon Trail", result: true,  },
                  b: {answer: "The Un-Game",      result: false, },
                  c: {answer: "Word Munchers",    result: false, },
                  d: {answer: "Odell Lake",       result: false, },
            },   
        },

        music: { 
            0: {  Q: "Pop-Star Britney Spears was born in which year?",
                  a: {answer: "1981", result: true,  },
                  b: {answer: "1988", result: false, },
                  c: {answer: "1979", result: false, },
                  d: {answer: "1990", result: false, },
            },
            1: {  Q: "Famous film composer Danny Elfman was the lead singer and songwriter for this 80’s new wave band.",
                  a: {answer: "Lords of the New Church",  result: false, },
                  b: {answer: "New Order",                result: false, },
                  c: {answer: "Oingo Boingo",             result: true,  },
                  d: {answer: "Joy Division",             result: false, },
            },
            2: {  Q: "Which European city was the rock band Phoenix founded in?",
                  a: {answer: "Versailles, France", result: true,  },
                  b: {answer: "Berlin, Germany",    result: false, },
                  c: {answer: "Milan, Italy",       result: false, },
                  d: {answer: "Stockholm, Sweden",  result: false, },
            }, 
            3: {  Q: "Led Zepplin’s album Houses of the Holy was released in which year?", 
                  a: {answer: "1977", result: false, },
                  b: {answer: "1969", result: false, },
                  c: {answer: "1973", result: true,  },
                  d: {answer: "1971", result: false, },
            },
            4: {  Q: "What does the acronym EP stand for??", 
                  a: {answer: "Expedited Piece",           result: false, },
                  b: {answer: "Extended Play",             result: true,  },
                  c: {answer: "Extraordinary Performance", result: false, },
                  d: {answer: "Evolved Percussion",        result: false, },
            },
            5: { Q: "What genre of music is the famous musician Charlie Parker associated with?", 
                  a: {answer: "Soul",      result: false, },
                  b: {answer: "Hip-Hop",   result: false, },
                  c: {answer: "Classical", result: false, },
                  d: {answer: "Jazz",      result: true,  },
            },     
        },

        movies:{    
            0: {  Q: "This film won the Academy Award for Best Picture in 1991.",
                  a: {answer: "Goodfellas",         result: false, },
                  b: {answer: "Dances with Wolves", result: true,  },
                  c: {answer: "Driving Miss Daisy", result: false, },
                  d: {answer: "Ghost",              result: false, },
            },
            1: {  Q: "What is the name of the fictional estate of Charles Foster Kane, the title character of the film Citizen Kane?",
                  a: {answer: "Hearst Castle",      result: false, },
                  b: {answer: "Xanadu",             result: true,  },
                  c: {answer: "Kubla Khan",         result: false, },
                  d: {answer: "The Biltmore Estate",result: false, },
            },
            2: {  Q: "While colonizing new planets, humans in the 1997 cult-hit Starship Troopers encounter an insectoid species known as Arachnids or 'Bugs', with their home being this distant world.",
                  a: {answer: "Klendathu", result: true,  },
                  b: {answer: "Kandisi",   result: false, },
                  c: {answer: "Krampus",   result: false, },
                  d: {answer: "Kormoun",   result: false, },
            }, 
            3: {  Q: "This well-known composer scored The Lord of the Rings and Hobbit trilogies.", 
                  a: {answer: "Hans Zimmer",   result: false, },
                  b: {answer: "John Williams", result: false, },
                  c: {answer: "Howard Shore",  result: true,  },
                  d: {answer: "James Horner",  result: false, },
            }, 
            4: {  Q: "Travis Bickle in the 1976 film Taxi Driver received an honorable discharge from which branch of the US Military?", 
                  a: {answer: "The Air Force",    result: false, },
                  b: {answer: "The Marine Corps", result: true,  },
                  c: {answer: "The Namy",         result: false, },
                  d: {answer: "The Army Reserve", result: false, },
            },
            5: {  Q: "In the Guardians of the Galaxy franchise Groot is voiced by which popular actor?", 
                  a: {answer: "David Bautista",   result: false, },
                  b: {answer: "Dwayne Johnson",   result: false, },
                  c: {answer: "James Earl Jones", result: false, },
                  d: {answer: "Vin Diesel",       result: true,  },
            },    
        },

        tv: {  
            0: {  Q: "The American television sitcom Happy Days, airing from 1974-1984, takes place in what real-life U.S. Town?",
                  a: {answer: "Madison, WI",   result: false, },
                  b: {answer: "Chicago, IL",   result: false, },
                  c: {answer: "Milwaukee, WI", result: true,  },
                  d: {answer: "Orlando, FL",   result: false, },
            },
            1: {  Q: "Battlestar Galatica first aired on ABC in what year?",
                  a: {answer: "1972",  result: false, },
                  b: {answer: "1989",  result: false, },
                  c: {answer: "2004",  result: false, },
                  d: {answer: "1978",  result: true,  },
            },
            2: {  Q: "Tina Fey’s character Liz Lemon on 30 Rock writes for this sketch comedy show prior to it being renamed TGS with Tracy Jordan.",
                  a: {answer: "The Girlie Show",              result: true,  },
                  b: {answer: "The Guys Show",                result: false, },
                  c: {answer: "Total Gut-busting Spectacle",  result: false, },
                  d: {answer: "Time to Get Schwifty",         result: false, },
            }, 
            3: {  Q: "The character of Ted Mosby on CBS’s How I Met Your Mother is played by which actor?", 
                  a: {answer: "Jason Segel",          result: false, },
                  b: {answer: "Josh Radnor",          result: true,  },
                  c: {answer: "Neil Patrick Harris",  result: false, },
                  d: {answer: "Jon Hamm",             result: false, },
            }, 
            4: {  Q: "What is the birth name of Hodor on the HBO show Game of Thrones?", 
                  a: {answer: "Wylis",    result: true,  },
                  b: {answer: "Rodoh",    result: false, },
                  c: {answer: "Hodramus", result: false, },
                  d: {answer: "James",    result: false, },
            }, 
            5: {  Q: "The song Smelly Cat sung by Phoebe Buffay first appears in which second season episode of Friends?", 
                  a: {answer: "The 1 with Phoebe’s Husband",    result: false, },
                  b: {answer: "The 1 with the Baby on the Bus", result: true,  },
                  c: {answer: "The 1 with the List",            result: false, },
                  d: {answer: "The 1 with the Chicken Pox",     result: false, },
            },    
        },
  }
  
  var player = {
        1: { roundPts: null, totalPts: 0, right: 0, wrong: 0, noAnswer: 0, img: Math.floor(Math.random() * 3), name: "Player One"},
        2: { roundPts: null, totalPts: 0, right: 0, wrong: 0, noAnswer: 0,img: Math.floor(Math.random() * 3), name: "Player Two"},
  }

  var game = {
    //picks random music to be played in the background
    bgMusic: new Audio("assets/sounds/music/bgMusic" + Math.floor(Math.random() * 6) +".mp3"),
    click: new Audio("assets/sounds/click.mp3"),
    playerCount: null,
    categoryPicked: null,
    roundNumber: 1,
    question: 0,
    check: false,


    // when you click the play button
    play: function(){
      $("body").off();
      $("h3").html("");
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
      setTimeout( function() { game.select("How Many Players Will There Be?", ".players", "playerCount")}, 4500);
    },

    //selects how many players
    select : function (a, b, c){
      //animates the elements
      $("header, h3").fadeIn("slow");
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
        //plays click sound
        game.click.volume = .1;
        game.click.play();
        //animates the selected to the left
        $(b).fadeOut("slow");
        //turns off hover and onclick function
        $(b).off();
        $("h3").html("").fadeOut("slow");
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
      $("h2").html("How To Play").fadeIn("slow");
      $("p").html("Welcome to the Super Fantastic Trivia Game! Here is how it works. Each player will have 10 seconds to answer a Super Fatastic Trivia question. The faster you answer the more points you will recieve. The person with the most points after three rounds wins!").fadeIn("slow");
      setTimeout( function(){
        $("h2").fadeOut("slow");
        $("p").fadeOut("slow");
      }, 10000)
    //get ready to start
    setTimeout( function() { game.ready(1)}, 10500);
    },

    ready: function(a){
      $("#bgImage").animate({ "opacity" : ".0"}, 2000);
      $("h2").html( player[a].name + " Get Ready!").fadeIn("slow");
      $(".big").html("<img src='assets/images/" +  player[a].img +".png' id='bigImg'>").fadeIn("slow");
      setTimeout( function() { $("h2, .big").fadeOut("slow")}, 3000);
      setTimeout( function() { game.round(a)}, 3500);  
    },

    round: function(a){
      //check to see if its the final round
      if(game.roundNumber === 3 || game.roundNumber === "Final"){game.roundNumber = "Final";
        $("h2").html(game.roundNumber + " Round!").fadeIn("slow");
      } else {
        $("h2").html("Round " + game.roundNumber).fadeIn("slow");
      }
      $("#CountDownTimer").TimeCircles().rebuild();
      $(".small").html("<img src='assets/images/" +  player[a].img +"a.png' id='smallImg'>").fadeIn("slow");
      $(".playerInfo").html(player[a].name + "<br> Score: " + player[a].totalPts + "pts").fadeIn("slow");
      $(".container").fadeIn("slow");  
      //place question on page
      $("#questionBox").html(category[game.categoryPicked][game.question].Q);
      //set answers
      $("#choiceA").html("A: " + category[game.categoryPicked][game.question].a.answer);
      $("#choiceB").html("B: " + category[game.categoryPicked][game.question].b.answer);
      $("#choiceC").html("C: " + category[game.categoryPicked][game.question].c.answer);
      $("#choiceD").html("D: " + category[game.categoryPicked][game.question].d.answer);
      $("#questionBox").fadeIn("slow");
      $(".answerBox").hover(           
        //what happens when you hover the card
        function(){ 
          $(this).css({"border" : "solid #f00 2px"});
        },
        //what happens when you stop hovering the card
        function(){
          $(this).css({"border" : "solid #000 1px"});
        }
      );
      //show answers on page
      setTimeout( function(){
      setTimeout(function(){$("#choiceA").fadeIn("slow")}, 1000);
      setTimeout(function(){$("#choiceB").fadeIn("slow")}, 1500);
      setTimeout(function(){$("#choiceC").fadeIn("slow")}, 2000);
      setTimeout(function(){$("#choiceD").fadeIn("slow")}, 2500);
      }, 4000);
      
      //starts the countdown check to see if you answered
      function startClock(){
        clock = setTimeout(function(){game.roundEnd(a); 
        player[a].noAnswer++
        player[a].roundPts = 0;
      }, 10000); }
    
      setTimeout( function(){
        //starts the visual clock
        $("#CountDownTimer").TimeCircles().start(); 
        startClock();
        //on click doooooooo stufffffff
        $(".answerBox").on("click", function(){
          //stop the clock
          stopClock();
          $("#CountDownTimer").TimeCircles().stop();
          $(".answerBox").css({"border" : "solid #000 1px"}).off();
          //check to see if the answer is correct or not
          if(category[game.categoryPicked][game.question][$(this).attr("value")].result){
            player[a].roundPts = 10 * $("#CountDownTimer").TimeCircles().getTime().toFixed();;
            player[a].totalPts = player[a].totalPts + player[a].roundPts;
            player[a].right++
          } else {
            player[a].roundPts = 0;
            player[a].wrong++
          }
          game.roundEnd(a);
        }) 
      }, 7000);
    },

    //runs when an answer is selected or time runs out
    roundEnd: function(a){
      //changes elements on page
      $(".answerBox").off();
      $(".answerBox, #questionBox, h2, .container, .small, .playerInfo").fadeOut("slow");
      $("#CountDownTimer").TimeCircles().destroy();
        
        //if there are two players it has too loop through it
        if(game.playerCount === "two" && a !== 2 ){
          setTimeout( function() { game.ready(2)}, 1000); 
        } else {
          setTimeout(game.leader, 500);
        }
      game.question++
    },

    //start of the leader board... 
    leader: function(){
      //if its the last round we go to final
      if(game.roundNumber === "Final"){setTimeout( function() {game.final(1)}, 500);}
      else {
        //changes elements on the page
        $("#bgImage").css({"background-image" : "url(assets/images/bgImage1.jpg)"});
        $("#bgImage").animate({ "opacity" : "1"}, 2000);
        $("h2").html("Lets See How You Did").fadeIn("slow");
        $("#leader").fadeIn("slow");
        $(".result").css({"background-color" : "#ccc"});
        setTimeout( function() {game.result(1)}, 500);
      }
    },

    result: function(a){     
        //changes elements on the page
        $("#imgResult" + a).html("<img src='assets/images/" +  player[a].img +"a.png'>").fadeIn("slow");
        $("#playerResult" + a).html(player[a].name + "<br> Score: ").fadeIn("slow");
        $("#result" + a).fadeIn("slow");   
        setTimeout ( function (){
          //if they didn't get any points
          if(player[a].roundPts === 0){
          //change background to red
          $("#result" + a).css({"background-color" : "#f00"})
          $("#playerResult" + a).html(player[a].name + "<br> Score: " + player[a].totalPts + "pts")
          } else {  
          //change background to green
          $("#result" + a).css({"background-color" : "#BBFFBB"})
          $("#playerResult" + a).html(player[a].name + "<br> Score: " + player[a].totalPts + "pts") 
          }
        }, 2000)   
        setTimeout ( function(){
           //if there are two players it has too loop through it
          if(game.playerCount === "two" && a !== 2 ){
            setTimeout( function() { game.result(2)}, 500); 
          } else {
            //remove elements on page add one to roundNumber and start the next round
            $("#leader, .result, .imgResult, .playerResult, h3").fadeOut("slow");
            setTimeout( function() { game.ready(1)}, 500)
            game.roundNumber++
          }
        }, 4000);
    },

    final: function(a){
      //changes elements on the page
      $("h2").html("Final Results For " + player[a].name).fadeIn("slow");
      $(".big").html("<img src='assets/images/" +  player[a].img +".png' id='bigImg'>").css({"left" : "-100px", "bottom" : "25px"}).fadeIn("slow");
      $("#bgImage").css({"background-image" : "url(assets/images/bgImage.jpg)"});
      $("#bgImage").animate({ "opacity" : "1"}, 2000);   
      //sets the results in the answerBox's
      setTimeout( function(){
      setTimeout(function(){$("#choiceA").html("Total Score: " + player[a].totalPts).fadeIn("slow")}, 1000);
      setTimeout(function(){$("#choiceB").html("Total Right: " + player[a].right).fadeIn("slow")}, 1500);
      setTimeout(function(){$("#choiceC").html("Total Wrong: " + player[a].wrong).fadeIn("slow")}, 2000);
      setTimeout(function(){$("#choiceD").html("Total Not Answered: " + player[a].noAnswer).fadeIn("slow")}, 2500);
      }, 2000); 
    
      setTimeout ( function(){
          //check to see if there are two players 
          if(game.playerCount === "two" && a !== 2 || game.check === true){
            // check to see if you have shown both players
            if(game.check){
              $("h2, .big, .answerBox").fadeOut("slow")
              //show winner
              setTimeout(game.winner, 500);
            } else {
              //show player two
              $("h2, .big, .answerBox").fadeOut("slow")
              game.check = true
              setTimeout( function() { game.final(2)}, 500); 
            }
          } else {  
          //show player one
          $("h2").html("Great Job!");
          $("#replay").fadeIn("slow");
          setTimeout( game.replay, 8000);
          }
        }, 8000);  
    },

    winner: function(){
      //check to see if player one is the winner
      if(player[1].totalPts > player[2].totalPts){
        $("h2").html("The Winner Is " + player[1].name + "!").fadeIn("slow");
        $(".big").html("<img src='assets/images/" +  player[1].img +".png' id='bigImg'>").css({"left" : "0"}).fadeIn("slow");
      // check to see if player two is the winner
      } else if(player[1].totalPts < player[2].totalPts){
        $("h2").html("The Winner Is " + player[2].name + "!").fadeIn("slow");
        $(".big").html("<img src='assets/images/" +  player[2].img +".png' id='bigImg'>").css({"left" : "0"}).fadeIn("slow");
      //call it a tie
      } else {
        $("h2").html("You Tied!").fadeIn("slow");
      }
      //reload the page to replay
      $("#replay").fadeIn("slow")
      setTimeout( game.replay, 8000);
    },

    replay: function(){location.reload();},
  }

//sets the click to start game
$("body").on("click", game.play);

});