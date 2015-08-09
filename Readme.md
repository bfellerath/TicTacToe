##TicTacToe

![](TicTacToe/images/TicTacToe_screenshot.png)

Here is the code from the scoreboard:

```
var pointsX = 0
var pointsO = 0;

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


```
