//? Operador ternario

//* Se puede usar como un if...else

const age = 20;

if (age >= 18) {
  console.log('Eres mayor de edad')
} else {
  console.log('Eres menor');  
}

// pregunta   ?   ejecuta esto si true  :   ejecuta esto si false;
age >= 18 
  ? console.log('Eres mayor de edad') 
  : console.log('Eres menor');


//* En realidad yo te diría que usar<s el ternario cuando: 
//* Necesitas UN VALOR O OTRO DEPENDIENDO DE UNA CONDICIÓN


//* Caso 1: Tienes una variable y le quieres dar un valor o otro

const isMarried = false;

let icon;

if (isMarried) {
  icon = 'ring-icon';
} else {
  icon = 'knife-icon';
}

const coolIcon = isMarried ? 'ring-icon' : 'knife-icon';

//* Caso 2: Cuando una función tiene que retornar un valor o otro

function esPar (num) {
  return num % 2 === 0 ? 'es par' : 'es impar';
}


//* Caso 3: En una interpolación de un template literal (backticks)


console.log(`Tienes ${age} años y${isMarried ? '' : ' no'} estás casado.`)


