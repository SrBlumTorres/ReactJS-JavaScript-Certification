// 🥁🥁🥁🥁🥁

//* Arrow functions  => funciones flecha
//! Funcionan exactamente igual, solo tienen algún detallito técnico distinto que veremos más adelante
const saludito = function () { console.log('hola') }
const saludillo = () => { console.log('holita') };



//? Diferencias básicas de sintaxis

//* Si solo tiene un parámetro, TE PERMITEN QUITAR LOS PARÉNTESIS

const saludo = nombre => {
  console.log('Hola, ' + nombre)
};

saludo('Ivan');

//* Si no tiene ningún parámetrro, podemos ver que se usa un guión bajo a veces

const buenosDias = _ => {
  console.log('Hola, buenos días')
};

buenosDias();



//* Si la función SOLO TIENE UNA LÍNEA DE EJECUCIÓN, te permita quitar las llaves

const sumar =  (a, b) => console.log(a + b);

//* Si además ESA ÚNICA LÍNEA ES UN RETURN, te permite quitar la palabra return. LA FLECHA TIENE UN RETURN IMPLÍCITO

const restar = (a, b) => a - b;


//! Mi decisión 100% SUBJETIVA de qué utilizo yo es:

//* Si tengo que crear una funciçon utilizo function

function multiplicar (a, b) {
  return a * b;
}


//* Si tengo que pasar por parámetro una función utilizo arrow functions

[].filter(() => {});