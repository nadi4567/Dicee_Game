var player1wins = 0;
var player2wins = 0 ;
var play  = document.querySelector(".btn");
play.addEventListener("click",playGame);

//play game
function playGame(){
    
    var randomNumber1 = Math.floor(Math.random() * 6 ) + 1;

    // changing image src of image1
    var image1 = document.querySelector(".img1")
    image1.setAttribute("src","./images/dice" + randomNumber1 + ".png");
    
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    // changing image src of image 2
    
    var image2 = document.querySelector(".img2");
    image2.setAttribute("src","./images/dice" + randomNumber2 + ".png");
    
    var heading = document.querySelector("h1");
    if(randomNumber1 > randomNumber2){
        player1wins ++;
        heading.innerHTML = "Player 1 Wins " + ": "+player1wins + " times";
    }else if (randomNumber2 > randomNumber1){
        player2wins ++ ;
        heading.innerHTML = "Player 2 wins! " + ": "+player2wins+" times"
    }else{
        heading.innerHTML = "Draw!"
    }



    // check if 5 rounds have been played


    if (player1wins + player2wins === 5) {
      // determine final winner and update heading
      if (player1wins > player2wins) {
        document.querySelector("h1").innerHTML = "Final winner : Player 1";
      } else if (player2wins > player1wins) {
        document.querySelector("h1").innerHTML = "Final winner : player 2";
      } else {
        document.querySelector("h1").innerHTML = "It was a tie!";
      }
  
      // reset win counters to 0
      player1wins = 0;
      player2wins = 0;
         

    }
}

    /** 
if (player1wins === 5 || player2wins === 5){
    if (player1wins > player2wins){
        heading.innerHTML = "Final winner : Player 1"
    }else if (player2wins > player1wins){
        heading.innerHTML = "Final winner : player 2"
    }else{
        heading.innerHTML =" It was a tie!"
    }
}
*/


