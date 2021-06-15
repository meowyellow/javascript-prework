
 function getMoveName(argMoveId) {

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
  }
}
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

let playerMove = getMoveName(playerInput);

const displayResult = function (argComputerMove, argPlayerMove) {
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

  if (argPlayerMove == 'Nieznany ruch') {
    printMessage('Nieznany ruch');
  }
  else if (argComputerMove == argPlayerMove) {
    printMessage('Remis');
  }
  else if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
    printMessage('Wygrywasz!');
  }
  else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
    printMessage('Przegrywasz!')
  }
  else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
    printMessage('Wygrywasz!')
  }
  else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
    printMessage('Przegrywasz!')
  }
  else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
    printMessage('Przegrywasz!')
  }
  else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
    printMessage('Wygrywasz!')
  }
 displayResult(argcomputerMove, argPlayerMove);



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