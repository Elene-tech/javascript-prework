/*const stone="stone";
const paper ="paper";
const scissors ="scissors";*/
const draw = "draw";

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


let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('the number drawn is: ' + randomNumber); //random number works

let computerMove = getMoveName (randomNumber);
printMessage('Computer move is: ' + computerMove);


//Player//

let playerInput = prompt('Choose your move! 1: stone, 2: paper, 3: scissors.');

console.log (playerInput);
let playerMove = getMoveName (Number(playerInput));
printMessage('Your move is: ' + playerMove);

/*if (playerInput === 1){
  playerMove='stone'; 
}else if (playerInput===2){
  playerMove='paper';
}else if (playerInput===3){
  playerMove='scissors';
}
*/


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