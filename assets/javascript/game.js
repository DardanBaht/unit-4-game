var randomNumber;
var wins = 0;
var losses = 0;
var value = 0;

// Radom number generated for the game. 

randomNumber = Math.floor(Math.random() * 101) + 19;
$("#number").html("Your number is: "+ randomNumber);


// I tried to run a for loop in order to generate a random number for each crystal but every time I clicked on a cystal the numbers would be the same for all. This is the only way it ended up working for me. I have to figure out how the loop can generate a different value for each crystal/image. 


for (var i = 0; i < 4; i++) {
var randomOne = Math.floor(Math.random() * 12) + 1;
}

for (var i = 0; i < 4; i++) {
var randomTwo = Math.floor(Math.random() * 12) + 1;
}

for (var i = 0; i < 4; i++) {
var randomThree = Math.floor(Math.random() * 12) + 1;
}

for (var i = 0; i < 4; i++) {
var randomFour = Math.floor(Math.random() * 12) + 1;
}


//Added functions for winning and losing and what happens after each. 

function youWon(){
    wins++;
    $("#Winner").html(wins);
    playAgain();

  }

  function youLost(){
      losses++;
      $("#Loser").html(losses);
      playAgain();
  }


//   I could not figure out how to reset the game to start all over. I tried putting the for loop in the function and doing it that way but it did not seem to work. 

function playAgain(){
      randomNumber = Math.floor(Math.random() * 101) + 19;
      $("#number").html("Your number is: "+ randomNumber);
      var value = 0;
      $("#Score").text("Your Score is: " + value); 
}


// Functions for clicking on images, adding each click to the total score, and what happens when you equal the random number and when you go over the random number (Winner and Loser). 

$("#Pic1").on("click", function(){
    value = value + randomOne;
    
    $("#Score").text("Your Score is: " + value); 
        if (value === randomNumber){
          youWon();
          
        }

        else if ( value > randomNumber){
          youLost();
         
        }   
  })  

  $("#Pic2").on("click", function(){
    value = value + randomTwo;

    $("#Score").text("Your Score is: " + value); 
        
        if (value === randomNumber){
          youWon();
          
        }

        else if (value > randomNumber){
          youLost();
         
        }   
  })  

  $("#Pic3").on("click", function(){
    value = value + randomThree;
   
    $("#Score").text("Your Score is: " + value); 

        if (value === randomNumber){
          youWon();
          
        }

        else if (value > randomNumber){
          youLost();
    
        }   
  })  

  $("#Pic4").on("click", function(){
    value = value + randomFour;

    $("#Score").text("Your Score is: " + value); 
          
        if (value === randomNumber){
          youWon();
          
        }

        else if (value > randomNumber){
          youLost();
         
        }   
  })  