<<<<<<< HEAD
printMessage('Zagrałem kamień! Jeśli Twój ruch to papier, to wygrywasz!');
=======
function printMessage(''){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
>>>>>>> 111e8ef9cc01d0014bc2045b49ebb2ecc84b2a91
