let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
computerMove = 'kamień';}
else if(randomNumber == 2)
{computerMove = 'papier';}
else {(randomNumber == 3)
{computerMove = 'nożyce';}
}

printMessage('ruch komputera to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}
if(playerInput == '2')
{playerMove = 'papier';
}
if(playerInput == '3')
{playerMove = 'nożyce';
}




printMessage('Twój ruch to: ' + playerMove);

if( computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
}
if( computerMove == 'kamień' && playerMove == 'nożyce'){
  printMessage('komputer wygrywa!');
}
if( computerMove == 'kamień' && playerMove == 'kamień'){
  printMessage('Remis');
}
if( computerMove == 'papier' && playerMove == 'papier'){
  printMessage('Remis');
}
if( computerMove == 'papier' && playerMove == 'nożyce'){
  printMessage('Ty wygrywasz!');
}
if( computerMove == 'papier' && playerMove == 'kamień'){
  printMessage('Komputer wygrywa');
}
if( computerMove == 'nożyce' && playerMove == 'papier'){
  printMessage('Komputer Wygrywa');
}
if( computerMove == 'nożyce' && playerMove == 'nożyce'){
  printMessage('Remis!');
}
if( computerMove == 'nożyce' && playerMove == 'kamień'){
  printMessage('Ty Wygrywasz');
}
if( computerMove == 'nożyce' && playerMove == 'nieznany ruch'){
  printMessage('błąd');
}
if( computerMove == 'papier' && playerMove == 'nieznany ruch'){
  printMessage('błąd');
}
if( computerMove == 'kamień' && playerMove == 'nieznany ruch'){
  printMessage('błąd');
}
