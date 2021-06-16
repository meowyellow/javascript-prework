{
  const playGame = function (playerInput){
      
      clearMessages();
      
      console.log(playerInput);

const getMoveName = function (argMoveId) {

  if (argMoveId == 1) {
    return 'kamień';
  }
  else if (argMoveId == 2) {
    return 'papier';
  }
  else if (argMoveId == 3) {
    return 'nożyce';
  }
  else {
    printMessage('nieznany ruch');
    return 'nieznany ruch';
  }
}

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);
let randomNumber = Math.floor(Math.random() * 3 + 1);

let computerMove = getMoveName(randomNumber);


const displayResult = function (argComputerMove, argPlayerMove) {
  printMessage('Komputer zagrał ' + argComputerMove + ', Ja zagrałem ' + argPlayerMove);

  if (argPlayerMove == 'nieznany ruch') {
    printMessage('błąd');
  }
  else if (argComputerMove == argPlayerMove) {
    printMessage('Remis');
  }
  else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
    printMessage('Przegrywasz')
  }

  else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
    printMessage('Przegrywasz!')
  }
  else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
    printMessage('Przegrywasz!')
  }
  else {
    printMessage('Ty Wygrywasz');
  }
}
console.log('Wylosowana liczba to: ' + randomNumber);
displayResult(computerMove, playerMove);

/*if (randomNumber == 1) {
 computerMove = 'kamień';
}
else if (randomNumber == 2) { computerMove = 'papier'; }
else {
 (randomNumber == 3)
 { computerMove = 'nożyce'; }
}
printMessage('ruch komputera to: ' + computerMove);
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);
let playerMove = 'nieznany ruch';
if (playerInput == '1') {
 playerMove = 'kamień';
}
else if (playerInput == '2') {
 playerMove = 'papier';
}
else if (playerInput == '3') {
 playerMove = 'nożyce';
}
else {
 printMessage('błąd');
}
*/
/*
printMessage('Twój ruch to: ' + playerMove);
if (computerMove == 'kamień' && playerMove == 'papier') {
  printMessage('Ty wygrywasz!');
}
else if (computerMove == 'kamień' && playerMove == 'nożyce') {
  printMessage('komputer wygrywa!');
}
else if (computerMove == 'papier' && playerMove == 'nożyce') {
  printMessage('Ty wygrywasz!');
}
else if (computerMove == 'papier' && playerMove == 'kamień') {
  printMessage('Komputer wygrywa');
}
else if (computerMove == 'nożyce' && playerMove == 'papier') {
  printMessage('Komputer Wygrywa');
}
else if (computerMove == 'nożyce' && playerMove == 'kamień') {
  printMessage('Ty Wygrywasz');
}
else if (computerMove == playerMove) {
  printMessage('Remis');
}
*/
}

document.getElementById('play-rock').addEventListener('click', function(){

    playGame(1);

});

document.getElementById('play-scissors').addEventListener('click', function(){

    playGame(3);
    
});

document.getElementById('play-paper').addEventListener('click', function(){

    playGame(2);

});
  }