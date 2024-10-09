"use strict"

//? Condicionales

//* if ... si se cumple esto...haz esto

// if (true) {
//   console.log('Funciona');
// }


//* Operadores condicionales

//* >  mayor que

if (2 > 1) {
  console.log('2 es mayor que 1');  
}



//* >=  mayor o igual que
if (2 >= 4) {
  console.log('2 es mayor o igual que 4');  
}



//* <  menor que
if (2 < 1) {
  console.log('2 es menor que 1');  
}


//* <=  menor o igual que
if (2 <= 2) {
  console.log('2 es menor o igual que 1');  
}


//* == igual que...
//! Este solo comprueba que los VALORES SEAN IGUALES, no comprueba el tipo de variable

if (2 == 2) {
  console.log('2 es igual a 2');  
}

if (2 == '2') {
  console.log('2 es igual a "2"');  
}


//* ===  igual que...de verdad de la buena

if (2 === 2) {
  console.log('2 es igual a 2');  
}

if (2 === '2') {
  console.log('2 es igual a 2');  
}

//* !=  distinto de...

if (2 != 2) {
  console.log('2 es distinto a 2');  
}

if (2 != '2') {
  console.log('2 es distinto a "2"');  
}

//* !==     distinto de....de verdad de la buena

if (2 !== 2) {
  console.log('2 es distinto a 2');  
}

if (2 !== '2') {
  console.log('2 es distinto a "2"');  
}



//**********************************************/


//* Podemos preguntar varias condiciones usando && (and) y || (or)


//* &&  --> Necesita que los dos lados SEAN true para que todo valga true
const nombre = 'Carlos';
const edad = 37;


//    true  && true  = true
//    true  && false = false
//    false && true  = false
//    false && false = false

//                  true
//         true       &&      true
if (nombre === 'Ivan' && edad > 18) {
  console.log('Te llamas Ivan y eres mayor de edad');
  
}


//* ||  --> Solo necesita que UNO DE LOS DOS LADOS sea true para que todo valga true

//    true  || true  = true
//    true  || false = true
//    false || true  = true
//    false || false = false


if (nombre === 'Ivan' || edad > 18) {
  console.log(`Te llamas ${nombre} o eres mayor de edad`);  
}


//* Puedes preguntar tantas cosas como quieras

const diaSemana = 'lunes';
const horario = 8;

if (diaSemana === 'lunes' || diaSemana === 'martes' || diaSemana === 'miercoles' && horario > 8) {
  console.log('Está abierto');
}

//* else if.....  👉 en cambio...si se cumple esto otro...haz esto
//! por obligación tiene que haber un if antes


if (diaSemana === 'lunes') {
  console.log('Hoy es lunes');  
}


if (diaSemana === 'martes') {
  console.log('Hoy es martes');  
}

if (diaSemana === 'miercoles' || edad > 18) {
  console.log('Hoy es miercoles');  
}



if (diaSemana === 'lunes') {
  console.log('Hoy es lunes');  
} else if (diaSemana === 'martes') {
  console.log('Hoy es martes');  
} else if (diaSemana === 'miercoles' || edad > 18) {
  console.log('Hoy es miercoles');  
}


//* else.... 👉   Siempre que NO SE CUMPLA NADA DE LO ANTERIOR, ejecutaré esto...

//! por obligación tiene que haber un if antes.... y puede haber else if o no

//! cuidado con el else porque es muiy abierto, en este caso se ejecutará VALGA LO QUE VALGA estoyCasado

const estoyCasado = 'hola';

if (estoyCasado === true) {
  console.log('Viva los novios!')
} else {
  console.log('Se te pasa el arroz')
}


//*********************************************/


//* EXTRA!!!!  Para Javascript hay valores que son considerados verdaderos (truthy) y otros falsos (falsy)

const isAdmin = 0;

if (isAdmin) {
  console.log('👌')
} else {
  console.log('❌')
}


/*
            834         true
            -834        true
            "hola"      true
            []          true
            {}          true


            ""          false
            0           false
            null        false
            undefined   false
            NaN         false
*/


//* EXTRA 2!!  Si utilizamos el signo de admiración delante de un valor, se invierte su valor booleano
//! Siempre que veas una admiración léela como un NOOOO gigante

const isConnected = true;

if (!isConnected) {
  console.log('Desconectado');
} else {
  console.log('Conectado');  
}


//* EXTRA 3!!  Si lo que hay dentro del if es una sola línea de ejecución, PODEMOS QUITAR LAS LLAVES

const isMarried = true;

if (!isMarried) console.log('No casado');
else            console.log('Casado');








//? =========================
//? ÁMBITO DE LAS VARIABLES


var perro1 = 'Freya';  // ámbito global (global scope)
let perro2 = 'Kira'; // ámbito global

if (true) {


  console.log(perro1);
  console.log(perro2);

  perro1 = 'Fluffy';
  perro2 = 'Bichito';


  var gato1 = 'Uñitas'; // ámbito global  (global scope)
  let gato2 = 'Buzz'; // ámbito local (local scope)

}

gato1 = 'Tom';
console.log(gato1);



// gato2 = 'Garfield'; //! no existe


console.log(gato1);
// console.log(gato2); //! no existe


console.log(perro1);
console.log(perro2);



//*  Switch

// 

const color = 'rojo';


if (color === 'rojo') console.log('💖');
else if (color === 'amarillo') console.log('🌞');
else if (color === 'verde') console.log('🌿');
else console.error('No has puesto un color válido');




switch (color) {
  case 'rojo': {
    console.log('💖');   
    break; 
  }
  case 'amarillo': {
    console.log('🌞');
    break;
  }
  case 'verde': {
    console.log('🌿');
    break;
  }
  default: {
    console.log('No has puesto un color válido');    
  }
}


//===================================================







