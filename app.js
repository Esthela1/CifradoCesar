let movimiento = document.getElementById("desplazamiento");
let texto = document.getElementById("firstMessage");
let resultado = document.getElementById("resultado");
let message;
let newMessage = [];
let finalMessage = [];
resultado.innerHTML += " ";

function encriptar(){
	message = texto.value;
	resultado.innerHTML = " ";
	let delta = parseInt(movimiento.value) % 26;
	console.log(delta);
	for(i=0;i<message.length; i++){
		if (message.charCodeAt(i)>90) {
			newMessage[i] = ((message.charCodeAt(i) - 97 + delta)%26) + 97;
			finalMessage[i] = String.fromCharCode(newMessage[i]);
		}
		else{
			newMessage[i] = ((message.charCodeAt(i) - 65 + delta)%26) + 65;
			finalMessage[i] = String.fromCharCode(newMessage[i]);
		}
		resultado.innerHTML += finalMessage[i];
	}
}

function desencriptar(){
	message = texto.value;
	resultado.innerHTML = " ";
	let delta = parseInt(movimiento.value) % 26;
	console.log(delta);
	for(i=0;i<message.length; i++){
		if (message.charCodeAt(i)>90) {

			if((message.charCodeAt(i) - 97 - delta)<0){
				newMessage[i] = ((message.charCodeAt(i) - 97 - delta)%26) + 123;
				finalMessage[i] = String.fromCharCode(newMessage[i]);
				console.log(newMessage[i]);
			}
			else{
				newMessage[i] = ((message.charCodeAt(i) - 97 - delta)%26) + 97;
				finalMessage[i] = String.fromCharCode(newMessage[i]);
				console.log(newMessage[i]);
			}
		}
		else{
			if ((message.charCodeAt(i) - 97 - delta)<0) {
				newMessage[i] = ((message.charCodeAt(i) - 65 - delta)%26) + 91;
				finalMessage[i] = String.fromCharCode(newMessage[i]);
			}
			else{
				newMessage[i] = ((message.charCodeAt(i) - 65 + delta)%26) + 65;
				finalMessage[i] = String.fromCharCode(newMessage[i]);
			}
		}
		resultado.innerHTML += finalMessage[i];
	}
}
