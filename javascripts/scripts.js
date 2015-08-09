console.log('scripts.js is connected');

window.onload = function() {
  var boardSpace = $('.board-space');
  // add event listener to table
  boardSpace.on('click', game.modifyText);
}

var game;
var player1Name;
var player2Name;
$(document).ready(function(){
      game = new TicTacToeGame();
      player1Name = prompt("Enter player 1 name");
      player2Name = prompt("Enter player 2 name");
      $('.name-div1').html(player1Name + '(x)' );
      $('.name-div2').html(player2Name + '(o)');
   });

var pointsX = 0
var pointsO = 0;

function startGame (){
       game = new TicTacToeGame();
       $('.name-container').html(player1Name + '(x)' + " VS. " + player2Name + '(y)' );
       }

var boardSpace = document.getElementsByClassName('board-space');
var gameState = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
  ];

function TicTacToeGame (){
      this.gameState = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
      this.turnNumber = 0;
      this.playerTokens = ['x', 'o'];
      this.player1Name = player1Name;
      this.player2Name = player2Name;
      }

TicTacToeGame.prototype.makeMove = function(xpos, ypos){
        this.gameState [xpos][ypos] = this.playerTokens[this.turnNumber % 2];
        this.turnNumber ++;
        getWinner();
      }

TicTacToeGame.prototype.modifyText = function () {
        if (this.innerHTML === '') {
        var row = $(this).attr('row');
        var column = $(this).attr('column');
        game.makeMove(row, column);
        this.innerHTML = game.gameState[row][column];
        console.log('row = ' + row);
        console.log('column = ' + column);
        }   else {
          alert ('please choose an open square');
        }
  }

function getWinner() {
    if (isWinner('x')) {
      alert( player1Name + ' wins!');
    $('.name-container').html("play again?");
    pointsX++;
    $('h2').html('SCOREBOARD');
    if (  pointsX === 1){
      $('.x-score').html(player1Name + ": " + pointsX + " win");
    }else {
        $('.x-score').html(player1Name + ": " + pointsX + " wins");
    }
    if (  pointsO === 1){
        $('.o-score').html(player2Name + ": " + pointsO + " win");
    }else {
        $('.o-score').html(player2Name + ": " + pointsO + " wins");
    }
    return 'x';
    }if (isWinner('o')) {
      alert(player2Name + ' wins!');
      $('.name-container').html("play again?");
      pointsO++;
      $('h2').html('SCOREBOARD');
      if (  pointsX === 1){
        $('.x-score').html(player1Name + ": " + pointsX + " win");
      }else {
          $('.x-score').html(player1Name + ": " + pointsX + " wins");
      }
      if ( pointsO === 1){
          $('.o-score').html(player2Name + ": " + pointsO + " win");
      }else {
          $('.o-score').html(player2Name + ": " + pointsO + " wins");
      }
      return 'o';
    } else {
      var gameDone = true;
      for (var i = 0; i < game.gameState.length; i++){
        for(var j = 0; j < game.gameState[i].length; j++){
        if (game.gameState[i][j] === null){
          gameDone = false;
        }
        }
      }
      if (gameDone === true){
        alert('no one wins!');
        $('.name-container').html("play again?");
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

$(document).ready(function(){
  $('.name-container').on('click',function(){
    console.log("is this working?");
    $('.board-space').text('');
    startGame();
    });
  });
