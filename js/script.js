function printMessage('Zagrałem kamień! Jeśli Twój ruch to papier, to wygrywasz!'){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('Zagrałem kamień! Jeśli Twój ruch to papier, to wygrywasz!').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}