const frase = '¿Hola, qué áse?';
//             01234567


//? Propiedades
//* length
console.log('frase.length =>', frase.length);


//? Métodos (funciones)

//* charAt 👉 Para obtener el caracter en una posición concreta

console.log(frase.charAt(1));
console.log(frase.charAt(-5)); // negativos no valen


//* indexOf(subString) 👉 Encontrar la primera coincidencia del substring que le pasemos
//! Si no encuentra ese substring dentro devolverá -1

console.log(frase.indexOf('qué'));
console.log(frase.indexOf('z'));

//* includes(subString) 👉 Te devuelve true o false si encuentra o no el substring dentro de tu texto

console.log(frase.includes('qué'));
console.log(frase.includes('z'));


//* toUpperCase() y toLowerCase() 👉 Para poner en mayúsculas o minúsculas

const fraseMayusculas = frase.toUpperCase();
console.log(fraseMayusculas);

const fraseMinusculas = frase.toLowerCase();
console.log(fraseMinusculas);


//* replace() y replaceAll() 👉 Para sustituir un trozo de texto por otro

console.log(frase.replace('Hola', 'Adios'));
console.log(frase.replaceAll(' ', '-'));


//* .endsWith(substring) 👉 Devuelve true o false si el string termina como tu le digas

const filePath = 'c:/usuarios/pice/foto.jpg';

if (filePath.endsWith('.jpg')) {
  console.log('Es una foto');  
}


//* trim() 👉 Para eliminar espacios en blanco delante y detrás

const palabra = '    hola         ';

console.log(palabra.length);
const palabraTrim = palabra.trim();
console.log(palabraTrim.length);


//* split(separator)  👉 Separa un string usando el separador que le pases y te genera un array nuevo

let arrayFrase = frase.split(); // [ '¿Hola, qué áse?' ]
arrayFrase = frase.split(''); // [ '¿', 'H', 'o', 'l', 'a', ',', ' ', 'q', 'u', 'é', ' ', 'á', 's', 'e', '?' ]
arrayFrase = frase.split(' ');


console.log(arrayFrase);

//* slice() para cortar un trozo de string

console.log(frase.slice(0, 4));
console.log(frase.slice(frase.indexOf('qué'), frase.indexOf('á') ));

//* padStart() 👉 Para rellenar un string con los caracteres que quieres hasta un length concreto

let hora = '3';
let minutos = '0';
let segundos = '5';

// if (hora < 10) hora = '0' + hora


console.log(`${hora.padStart(2, '0')}:${minutos.padStart(2, '0')}:${segundos.padStart(2, '0')}`);













