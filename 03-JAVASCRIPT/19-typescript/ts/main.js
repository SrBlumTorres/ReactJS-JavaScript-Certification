"use strict";
// Tipos de valores
let nombre = 'Ivan';
let edad = 37;
let isMarried = true;
let hijos = null;
let noDefinido = undefined;
//! Cuando creamos las variables NO ES NECESARIO TIPAR NADA
//* Typescript es suficientemente inteligente como para INFERIR EL TIPO
let apellido = 'Luengo';
//! Si erróneamente intentas cambiar el tipo te lo va a poner en rojo
// isMarried = 23;
// Funciones
// Podemos tipar tanto los parámetros como lo que devuelve
function sumar(a, b) {
    return a + b;
}
const restar = (a, b) => a + b;
// sumar('hola', true)
sumar(20, 3);
//* Arrays
const frutas = ['manzana', 'pera'];
const numbers = [1, 2, 3];
//* Podemos decirle a alguna variable/parámetro que no solo puede ser de un valor sino de varios
let stringONumber = 'texto';
stringONumber = 25;
//* Podemos también decirle a una variable que solo puede guardar unos valores CONCRETOS
let tallaCamiseta1 = 'md';
tallaCamiseta1 = 'lg';
let tallaPantalon1 = 'xl';
console.log(tallaPantalon1);
//* Tipando objetos
const persona1 = {
    nombre: 'Ivan',
    apellidos: 'Luengo',
    edad: 37
};
const persona2 = {
    nombre: 'Carlos',
    edad: 40,
};
persona1.nombre = 'Carlos';
const personas = [];
personas.push(persona1);
personas.push(persona2);
