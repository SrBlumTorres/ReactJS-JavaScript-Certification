const secreto = Math.floor((Math.random() * 100) + 1);
// const secreto = 50;
let intentos = 6;
let hasGanado = false;


// Pregunto al usuario el número secreto a ver si lo adivina
let numUsuario = prompt('Dime un número del 1 al 100, a ver si lo adivinas.')

//! Validación muy burda
if (isNaN(numUsuario) === false) {
  numUsuario = Number(numUsuario);
}



// Si sigue intentado y se queda sin intentos, le diré que ha perdido
while (intentos > 1) {
  
  // compruebo si lo ha acertado
  // si no lo ha acertado lanzaré otro prompt diciendo que le quedan menos intentos
  // si ha sido inferior le diré que el numero secreto es más alto
  if (numUsuario > secreto) {
    // si ha sido superior le diré que el número es más bajo
    numUsuario = Number(prompt(`No has acertado, el secreto es MENOR. Te quedan ${--intentos}`));
  } else if (numUsuario < secreto) {
    numUsuario = Number(prompt(`No has acertado, el secreto es MAYOR. Te quedan ${--intentos}`));
  } else {
    // si lo acierta, ya no le sacaré ningún prompt y le diré que ha ganado
    hasGanado = true;
    break;
  }

}

if (hasGanado) {
  console.log('¡Enhorabuena! 🥳');
} else {
  console.log(`Has perdido...🥹 El número secreto era ${secreto}`);
}








