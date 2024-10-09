"use strict";

console.log('Hola desde main');
/*  
comentario

de bloque
*/

// Comentario de línea



//* Es case sensitive. mayusuculas y minúsculas NO SON LO MISMO

//* Tiene un TIPADO DÉBIL y además NO ES ESTRICTO, es decir, que le puedes volver a cambiar el valor cuando quieras.

//* Detrás de cada sentencia va un punto y coma PERO ES OPCIONAL



//? Variables

//! Antes se usaba var. NO ES RECOMENDABLE 
var nombre = 'Ivan';


//* Usaremos let y const

// let permite volver a asignar un nuevo valo a la variable
let apellido = 'Luengo';
console.log(apellido);

let variableVacia; //* con let se puede


apellido = 'Padrosa';
console.log(apellido);

//! no podemos crear variables sin var, let o const
// edad = 37;
// console.log(edad);  // no existe




const edad = 37;
// edad = 25; //! No se puede sobreescribir


// const variableConstVacia;  //! No se puede

//* 

let minombre = 'no';
let MINOMBRE = 'no';
let MiNombre = 'no';
//! let 2perros = 'no'; 
//! let mi-nombre = 'no';
let acéntosNiEÑes = 'noooo';
console.log(acéntosNiEÑes);


let miNombre = 'SI';
let mi_nombre = 'SI';
let perros2 = 'SI';
let $caja = 'SI';


//* Para debuggear

console.log('Una cosa');
console.log('Varias cosas', 23);

const coche = 'Opel';
console.log('Coche: ', coche);

console.error('Mensaje de error');
console.warn('Mensaje de advertencia');

console.time('Contador 1');

console.timeEnd('Contador 1');


//! Te devuelve lo que le pases como segundo parámetro si la condición no se cumple 
console.assert(coche !== 'Opel', 'Coche inválido');




// alert('El alert corta la ejecución');


// prompt('Caja para pedir datos');

console.log('Log al final de todo');




