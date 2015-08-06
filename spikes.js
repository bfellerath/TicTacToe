console.log('spikes.js is connected');




//create a random computer move - here I am just generating a random number from 1 through 9





//okay using the random number above I want to get the computer to make a random move
//I realize I need to different random numbers, one that is between 0 and 2 and the other that is between 0 and 8

/*function getRandomMove (){
var randomMove1 = Math.floor((Math.random() * 4));
var randomMove2 = Math.floor((Math.random() * 10));

}

getRandomMove();*/









//adding event listener for clicking on something
//Okay adding an event listener is hard without there being something to add it to
//I spiked with a table, the below, also put the table into the html but I haven't been able to
//figure out how to get it to work for all of them yet, Maybe I should make a issue on github
//about it

window.onload = function() {
  var boardSpace = $('.board-space');
  function modifyText() {
    if (this.innerHTML === "null") {
      this.innerHTML = 'x';
    }   else {
      alert ('please choose an open square');
    }
  };
  // add event listener to table
  boardSpace.on('click', modifyText);
}

  //I'm trying to get the moves to display on my table here

  //spike on organizing data and making a move
  var gameState = [
      [null, null, null],
      [null, null, null],
      [null, null, null]

      ];


  function makeMove(xpos, ypos, playerToken) {
        gameState [xpos][ypos] = playerToken;
      }


  ///wokring on a contructor function for a tic tac toe game

      function TicTacToeGame (){
          this.gameState = [[
              null, null, null
              ],
              [
              null, null, null ],
              [
              null, null, null ]
              ];
              this.turnNumber = 0;
              this.playerTokens = ['x', 'o'];

      }



      TicTacToeGame.prototype.makeMove = function(xpos, ypos){
            this.gameState [xpos][ypos] = this.playerTokens[this.turnNumber % 2];

            this.turnNumber ++;

      }

      //I want to make a function that will display the move on the board
      //first I'm going to make a variable

      var elementPos = [


      ]








      var game = new TicTacToeGame();

      game.makeMove(0,0);
      game.makeMove(0,1);
      game.makeMove(0,2);







//okay so this is working because I gave it the window.onload function
//it would seem that with each click I have to get a new game state going
