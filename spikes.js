console.log('spikes.js is connected');

//create a random computer move - here I am just generating a random number from 1 through 9

//okay using the random number above I want to get the computer to make a random move
//I realize I need to different random numbers, one that is between 0 and 2 and the other that is between 0 and 8

/*function getRandomMove (){
var randomMove1 = Math.floor((Math.random() * 4));
var randomMove2 = Math.floor((Math.random() * 4));

}

getRandomMove();*/

//adding event listener for clicking on something
//Okay adding an event listener is hard without there being something to add it to
//I spiked with a table, the below, also put the table into the html but I haven't been able to
//figure out how to get it to work for all of them yet, Maybe I should make a issue on github
//about it

window.onload = function() {
  var boardSpace = $('.board-space');
  // add event listener to table
  boardSpace.on('click', game.modifyText);

}

var boardSpace = document.getElementsByClassName('board-space');


  //I'm trying to get the moves to display on my table here

  //spike on organizing data and making a move
  var gameState = [
      [null, null, null],
      [null, null, null],
      [null, null, null]

      ];


//  function makeMove(xpos, ypos, playerToken) {
  //    gameState [xpos][ypos] = playerToken;
    //  }


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
        getWinner();


        console.log(xpos);
      }

      //I want to make a function that will display the move on the board
      //first I'm going to make a variable

      var game = new TicTacToeGame();

      // game.makeMove(0,0);
      // game.makeMove(0,1);
      // game.makeMove(0,2);
      // game.makeMove(1,2);
      //game.makeMove(this.row, this.column);





  TicTacToeGame.prototype.modifyText = function () {

        if (this.innerHTML === 'null') {


        console.log(this);
        var row = $(this).attr('row');
        var column = $(this).attr('column');
        game.makeMove(row, column);
        this.innerHTML = game.gameState[row][column];


        console.log('row = ' + row);
        console.log('column = ' + column);


          //var column = this.attr('column');
        //  console.log(row);
        }   else {
          alert ('please choose an open square');
        }
  };



//the below functions are spiking on a getWinner function



function getWinner() {
  console.log('get winner function run');
    if (isWinner('x')) {
      alert('x wins!')
      return 'x';
    }if (isWinner('o')) {
      alert('o wins!')
      return 'o';
    } else {
      var gameDone = true;
      for (var i = 0; i < game.gameState.length; i++){
        for(var j = 0; j < game.gameState[i].length; j++){
        if (game.gameState[i][j] === null){
          gameDone = false;
        }
        console.log('the game is not done');
        }
      }
      if (gameDone === true){
        alert('no one wins!');
      }
      return null;
    }
}
function isWinner(player) {
    return winsRow(player) || winsColumn(player) || winsDiagonal(player);
}
function winsRow(player) {
    return allThree(player, game.gameState[0][0], game.gameState[0][1], game.gameState[0][2]) ||
           allThree(player, game.gameState[1][0], game.gameState[1][1], game.gameState[1][2]) ||
           allThree(player, game.gameState[2][0], game.gameState[2][1], game.gameState[2][2]);
}
function winsColumn(player) {
    return allThree(player, game.gameState[0][0], game.gameState[1][0], game.gameState[2][0]) ||
           allThree(player, game.gameState[0][1], game.gameState[1][1], game.gameState[2][1]) ||
           allThree(player, game.gameState[0][2], game.gameState[1][2], game.gameState[2][2]);
}
function winsDiagonal(player) {
    return allThree(player, game.gameState[0][0], game.gameState[1][1], game.gameState[2][2]) ||
           allThree(player, game.gameState[0][2], game.gameState[1][1], game.gameState[2][0]);
}
function allThree(player, cell_one, cell_two, cell_three) {
    return (cell_one === player) && (cell_two === player) && (cell_three === player);
}





//okay so this is working because I gave it the window.onload function
//it would seem that with each click I have to get a new game state going
