//? Operadores matemáticos

//* Sumar 👉  +

const numA = 5;
const numB = 10;

const suma1 = numA + numB;
console.log('suma1 =>', suma1);

// podemos concatenar strings
const nombre = 'Ivan';
const apellido = 'Luengo';

const nombreCompleto = nombre + ' ' + apellido;

const nombreCompleto2 = `${nombre} ${apellido}`;

console.log('nombreCompleto =>', nombreCompleto);
console.log('nombreCompleto2 =>', nombreCompleto2);

//! Cosas raras del  +

//! Cuando uno de los dos lados es un string, JS va a intentar convertir el otro elemento en un string
console.log('35 + "15" =>', 35 + "15");
console.log('35 + "hola" =>', 35 + "hola");


//! cuando hacemos una operación con un booleano, true = 1 y false = 0
console.log('35 + true =>', 35 + true);



//* Restar 👉    -

const resta1 = numA - numB;

console.log('resta1 =>', resta1);

//! Cosas raras que tienen todos los demás aparte del +

console.log('5 - "3" =>', 5 - "3");
console.log('5 - null =>', 5 - null);
console.log('5 - true =>', 5 - true);
console.log('5 - false =>', 5 - false);
console.log('5 - "hola" =>', 5 - 'hola');
console.log('5 - undefined =>', 5 - 'undefined');

//* Multiplicar 👉   *

const multi1 = numA * numB;
console.log('multi1 =>', multi1);

// Te permite hacer potencias usando dos asteriscos

console.log('4 ** 3 =>', 4 ** 3);


//* División 👉   /

const divi1 = numA / numB;
console.log('divi1 =>', divi1);


//* Módulo 👉   %
// resto de una división
// Te sirve para saber si un número es múltiplo de otro, es decir que al dividir uno por el otro da exacto


console.log('10 % 2 =>', 10 % 2); // 0
console.log('10 % 3 =>', 10 % 3); // 1


// Lo más usado es para saber si un número es PAR o IMPAR

console.log('43098572303 % 2 =>', 43098572303 % 2);


//*============================================


//* Operadores de asignación

//* Básico 👉   =

let number = 5;

// number = 7;


number = number + 2;  // 🤯

console.log(number); // 7



//* Reasignar y sumar/restar/multiplicar/dividir/modulo

// += -=  *=   /=   %=



number += 3; // 10
number -= 2; // 8
number *= 3; // 24
number /= 4; // 6 
number %= 2; // 0

console.log(number);



//* Reasignar y sumar 1 o restar 1

number = number + 1; // 1
number += 1; // 2
number++;  // 3
number++;  // 4
number++;  // 5
number--;  // 4
number--;  // 3
++number;  // 4
++number;  // 5
--number;  // 4























