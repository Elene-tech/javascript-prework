const stone="stone";
const paper ="paper";
const scissors ="scissors";
const draw = "draw";

//Computer//

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('the number drawn is: ' + randomNumber); //random number works

let computerMove = randomNumber;

if(randomNumber === 1){
  computerMove = stone;
}else if (randomNumber===2){
  computerMove=paper;
}else if (randomNumber===3){
  computerMove=scissors;
}else{
  alert('Choose a number!');
}
printMessage('Computer move is: ' + computerMove);
console.log(computerMove);

//Player//

let playerInput = prompt('Choose your move: stone,  paper,  scissors.');

console.log('Player has written: ' + playerInput);

let playerMove = playerInput;

console.log('Player chose'+ playerMove);

if (playerInput === 1){
  playerMove=stone; 
}else if (playerInput===2){
  playerMove=paper;
}else if (playerInput===3){
  playerMove=scissors;
}

printMessage('Your move is: ' + playerMove);

//winner

if (computerMove===playerMove){
  printMessage('Both have won - Draw !');
} else if (computerMove===stone && playerMove===paper || computerMove===paper && playerMove===scissors || computerMove===scissors && playerMove===stone)

  printMessage('You have won!');
  else {
  printMessage('Computer has won!');
}
 

