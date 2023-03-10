function playGame(playerInput){
 clearMessages();
        //Computer//
        //function//

        function getMoveName(argMoveId){
          if(argMoveId===1){
            return 'stone';
          } else if(argMoveId===2){
            return 'paper';
          } else if (argMoveId===3){
            return 'scissors';
          }else{
            return 'unknown choice';
          }
        }


        const randomNumber = Math.floor(Math.random() * 3 + 1);

        const computerMove = getMoveName (randomNumber);
        printMessage('Computer move is: ' + computerMove);


        //Player//

        const playerMove = getMoveName (playerInput);
        printMessage('Your move is: ' + playerMove);

      
        //winner

        function displayResult(argComputerMove,argPlayerMove){
          if (argComputerMove === argPlayerMove)
          printMessage('Both win - Draw!');
          else if(argComputerMove ==='stone'&&argPlayerMove ==='paper' || argComputerMove === 'paper' && argPlayerMove === 'scissors' || argComputerMove === 'scissors' && argPlayerMove === 'stone')
          {
            printMessage('You have won!');
          } else {
            printMessage('Computer has won!');
          }
        }
        displayResult(computerMove,playerMove);
}

document.getElementById('stone').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('scissors').addEventListener('click', function(){
  playGame(3);
});