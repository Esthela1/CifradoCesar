let movimiento = document.getElementById("desplazamiento");
let texto = document.getElementById("firstMessage");
let resultado = document.getElementById("resultado");
let message = [];
let newMessage = [];
let finalMessage = [];

function encriptar(){
	message = texto.value;
	for(i=0;i<message.length; i++){
			newMessage[i] = ((message.charCodeAt(i) - 65 + parseInt(movimiento.value))%26) + 65;
		console.log(newMessage);
		finalMessage[i] = String.fromCharCode(newMessage[i]);
	}
	resultado.innerHTML += finalMessage;
	console.log(finalMessage);
}

function desencriptar(){
	message = texto.value;
	for(i=0;i<message.length; i++){

		newMessage[i] = ((message.charCodeAt(i) - 65 + parseInt(movimiento.value))%26) - 65;
		finalMessage[i] = String.fromCharCode(newMessage[i]);
	}
	resultado.innerHTML += finalMessage;
	console.log(finalMessage);
}
