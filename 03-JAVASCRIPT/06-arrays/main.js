//? Arrays

//               0  1
const numbers = [4, 7];

const arrayConArrays = [2, 4, ['a', 'b']];


//* Acceder a un valor de un array  []

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[5]);

console.log(arrayConArrays['2']['1']);

//* Añadir o modificar elementos a un array directamente

numbers[0] = '🐶';
numbers[2] = '🚗';

console.log(numbers);


//* Los string funcionan parecido, puedo acceder a un caracter usando []

const palabra = 'calabaza';
console.log(palabra[2]);

//! No puedes mutar un string de esta forma
palabra[0] = 'Z';

console.log(palabra);


//************************************ */

//* Primitivos = se pasa el valor, se duplica el valor
let num1 = 23;
let num2 = num1;

num1 = '🐈';

console.log(num1);
console.log(num2);


//* NO PRIMITIVOS = se pasa la referencia no el valor

const arr1 = [2, 4]; // 0x123

const arr2 = arr1; // 0x123

arr1[0] = '🛻';

console.log(arr1);
console.log(arr2);

//* Con el SPREAD OPERATOR podemos duplicar un array ESPARCIENDO sus valores dentro de otro

//   [1, 2, 3]  ===>   ...[1, 2, 3]    ===> 1, 2, 3

const arr3 = [...arr1]; // 0x999
arr3[0] = '🚣';

console.log(arr1);
console.log(arr3);

const arr4 = arr1.concat(); // 0x456


const arr5 = ['hola', ...arr1, 23, ...arr3];
console.log(arr5);









