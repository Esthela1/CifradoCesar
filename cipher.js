//Crear una funcion llamada cipher que cifre el texto ingresado//
  var cifrado = "";
    
function cipher() {

  var texto = document.getElementById("mensaje").value;

  for (var i = 0; i < texto.length; i++) {
    //el for recorrera las letras del texto a cifrar//

    // if (
    //   parseInt(texto[i]% 1 ===0) 
    //    //condicionar para no ingresar numeros//
    // )

    var ubicacionCesar =
      (texto.toUpperCase().charCodeAt(i) - 65 + 33) % 26 + 65;

    var palabraCifrada = String.fromCharCode(ubicacionCesar);

    cifrado += palabraCifrada; //reunir las letras cifradas//

  }

 document.getElementById("resultado").innerHTML = cifrado;
}


// Crear una funcion llamada decipher que descifre el texto ingresado //

function decipher() {
  var palDescifrado = "";

  var descifrado = document.getElementById("mensaje").value;

  for (var j = 0; j < descifrado.length; j++) {
    //el for recorrera las letras del texto a descifrar//
//console.log(cifrado [j]);
    var ubicacionDescifrado = (descifrado.charCodeAt(j) + 65 - 33) % 26 + 65;

    var palabraDescifrada = String.fromCharCode(ubicacionDescifrado);

    palDescifrado += palabraDescifrada; //reunir las letras descifradas//
  }

 document.getElementById("resultado").innerHTML = palDescifrado;
 
 
}



