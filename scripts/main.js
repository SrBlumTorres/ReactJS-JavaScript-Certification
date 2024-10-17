// // // Bucle 1
// // for (let i = 0; i <= 30; i+=3) {
// //     const number = i;
// //     console.log(number);
// // }

// // // Bucle 2
// // const tablaMultiplicar = function(userNumber){
// //   for (let i = 1; i <= 10; i++) {
// //     const result = userNumber * i;
// //     console.log(`${userNumber} * ${i} = ${result}`);
// //   }
// // };

// // tablaMultiplicar(8);


// // // Bucle 3
// // const parImpar = function (){
// //     for(let i = 1; i < 21; i++){
// //         console.log((i % 2 === 0) ? `El: ${i} es par` : `El: ${i} es impar`);
// //     }
// // };

// // parImpar();

// // //Bucle 4
// // const fraseUsuario = function (frase) {
// //     return frase.split('').filter(letra => letra === 'a').length;
// // };

// // console.log('La letra A aparece: ' + fraseUsuario('Hola como estas') + ' veces');

// // // const letra = function (frase) {
// // //     let cont = 0; 
// // //     for (let caracter of frase) {
// // //         if (caracter === 'a') { 
// // //             cont = cont + 1; 
// // //         }
// // //     }
// // //     return cont;
// // // };

// // // console.log(letra('holaaa'));

// // //Bucle 5
// // const fibonacci = function (){
// //     for (let i = 1; i < 51; i++){
// //         if (i % 3 === 0){
// //             console.log(`El ${i} es múltiplo de 3`);
// //         } 
        
// //         if (i % 5 === 0) {
// //             console.log(`El ${i} es múltiplo de 5`);
// //         }
        
// //         if (i % 5 === 0 && i % 3 === 0){
// //             console.log(`El ${i} es múltiplo de 3 y 5`);
// //         }
// //     }
// // };

// // fibonacci();

// // //Bucle 6
// // const integerNumber = function(integerNumber_user) {
// //     // Mientras el número sea menor que 50 o mayor que 100
// //     while (integerNumber_user < 50 || integerNumber_user > 100) {
// //         // Solicita de nuevo el número al usuario
// //         integerNumber_user = prompt('Introduce un número entero (50-100)');
// //     }
// //     // Una vez que el número está entre 50 y 100, lo imprimimos
// //     console.log(integerNumber_user);
// // };
// // // Ejecuta la función con un número inicial solicitado al usuario
// // //integerNumber(prompt('Introduce un número entero (50-100)'));


// // //Bucle 7
// // const tablaNumero = function (userNumber) {
// //   while (userNumber < 2 || userNumber > 10) {
// //       // Solicita de nuevo el número al usuario
// //       userNumber = prompt('Introduce un número entero (2-10)');
// //   }
  
// //   return tablaMultiplicar(userNumber);
// // };

// // //console.log(tablaNumero(prompt('Introduce un número entero (2-10)')));

// // //Bucle 7
// // const tree = function (){
// //     let cont = 0;
// //     let star = '';
// //     while (cont < 8){
// //         cont++;
// //         star += '*';
// //         console.log(star);
// //     }
// // };

// // tree();

// // //Bucle 9
// // const numbers = [10, -6, 0, -23, -4, 0, -7, 9, -2, 76];
// // const evalNumbers = numbers.map(function (numbers) {
// //     if (numbers > 0) {
// //         console.log(numbers);
// //     } else if (numbers < 0) {
// //         console.log(numbers);
// //     } else {
// //         console.log(numbers);
// //     }
// // });

// # Ejercicios de Funciones, bucles y arrays

// ## Crea una función que llamaremos "range"

//   1. Puede recibir un número, 2 o 3
//   2. Si le pasamos un número, devolverá un array desde 0 a un número menor del que pasamos
//   3. Si le pasamos 2 números, devolverá un array desde el primer número hasta uno anterior al segundo
//   4. El tercer parámetro es opcional y sirve para decir el incremento de un número a otro. POR DEFECTO SERÁ 1

// ```js
//   range(4) // [0, 1, 2, 3]
//   range(4, 7) // [4, 5, 6]
//   range(2, 7, 2) // [2, 4, 6]
// ```

// ## Crea una función para capitalizar un texto
// Hay que vigilar que si pasan varios espacios se cuenten como uno
// Todas Las Palabras Estarán Con La Primera Letra En Mayúscula


// ```js
// capitalize('hola que tal') // 'Hola Que Tal'
// capitalize('hola que       tal') // 'Hola Que Tal'
// ```

// ## Crea una función que recibirá un string, y un separador y te devolverá el mismo string ese separador entre las palabras

// Hay que vigilar que si pasan varios espacios se cuenten como uno

// ```js
//  textWithSeparator('hola que tal', '-'); // 'hola-que-tal'
//  textWithSeparator('hola que       tal', '-'); // 'hola-que-tal'

// ```

// function range(paramNumber_1, paramNumber_2 = null, paramOptional = 1) {
//     const result = [];

//     // Si solo se pasa un parámetro, se asume que es el fin del rango y empieza desde 0.
//     if (paramNumber_2 === null) {
//         for (let i = 0; i <= paramNumber_1; i += paramOptional) {
//             result.push(i);
//         }
//     } else {
//         // Si se pasan dos parámetros, genera el rango desde paramNumber_1 hasta paramNumber_2
//         for (let i = paramNumber_1; i <= paramNumber_2; i += paramOptional) {
//             result.push(i);
//         }
//     }

//     return result;
// }

// console.log(range(45, 65, 3));


// Ejercicio 1: Manipulación de Strings
// Escribe una función llamada formatearTexto que reciba una cadena de texto y la devuelva en formato "Título". Esto significa que la primera letra de cada palabra debe estar en mayúsculas y las demás en minúsculas.

// js
// Copiar código
function formatearTexto(texto) {
    //Separamos la frase por espacios
    const splitText = texto.split(' ');
    const formatedText = [];

    for (const element of splitText) {
        console.log(34);
        console.log(element[0]);
    }

    return formatedText;
    // const textFormated = [];
    // textFormated
    // return textFormated.length;
  // Tu código aquí
}

console.log(formatearTexto("Hola, como estás?")); 
// Salida esperada: "Aprendiendo Javascript Es Divertido"
