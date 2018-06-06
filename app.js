let movimiento = document.getElementById("desplazamiento");
let texto = document.getElementById("firstMessage");
let message = [];
let newMessage = [];
let finalMessage;

function encriptar(){
message = texto.value;
for(i=0;i<message.length; i++){
	newMessage[i] = (((message.charCodeAt(i) - 65) + movimiento.value)%26) + 65;
}


/*for(i=0;i<newMessage.length;i++){
	finalMessage[i] = message.fromCharCode(newMessage[i]);
}*/
console.log(newMessage);
console.log(finalMessage);
}
