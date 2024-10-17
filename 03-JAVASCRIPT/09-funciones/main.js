//? Bloques de código reutilizables


function saludar () {
  console.log('Hola');  
}

console.log(saludar) // 0x444

//* Añadimos dinamismo si hacemos que me puedan pasar datos

function buenosDias (nombre) {
  console.log('Buenos días, ' + nombre);  
}


buenosDias('Ivan');
buenosDias('Carlos');
buenosDias('Carmen');
buenosDias();

//* Podemos pasar un valor por defecto usando =

function buenasTardes (nombre = 'amig@', ) {
  console.log('Buenas tardes, ' + nombre);  
}

buenasTardes('Alfredo');
buenasTardes();

//* También podemos validar dentro de la función

function buenasNoches (nombre) {

  if (nombre === undefined) {
    console.log('Buenas noches, amig@');
  } else if (typeof nombre !== 'string') {
    console.error('Tienes que pasar un string');
  } else {
    console.log('Buenas noches, ' + nombre);      
  }
}

buenasNoches('Ivan');
buenasNoches(23);
buenasNoches();


//* Podemos pasar varios parámetros

function saludoCompleto (nombre, apellido) {
  console.log(`Hola, ${nombre} ${apellido}`);  
}

//* Podemos permitir que me pasen parámetros infinitos usando ...

//     ...[1, 2, 3]  ==>  1, 2, 3
//     ...1, 2, 3  ==>  [1, 2, 3]

function sumarBasico (num1, num2) {
  console.log(num1 + num2);  
}

const x = 5;
const y = 4;

sumarBasico(4, 5, 7, 5);
sumarBasico(x, y);

                  
function sumar (...numeros) {
  let total = 0;
  for (const num of numeros) {
    total += num;
  }

  console.log(total);   
}


sumar(5, 4, 2, 3);
sumar(5);
sumar(5, 2);


//* El parámetro REST se puede utilizar solo como último parámetro

function sumar2 (nombre = 'amig@', ...numeros) {
  let total = 0;
  for (const num of numeros) {
    total += num;
  }

  console.log(`Hola ${nombre}, tu resultado es ${total}`);   
}

sumar2('Ivan', 5, 4);



//* De momento puedo ejecutar todo el código que hay dentro de una función pero NO PUEDO SACAR NADA DE DENTRO

// Usamos la palabra return


function multiplicar (a, b) {
  const resultado = a * b;

  return resultado;
}

console.log(multiplicar(5, 5))
const multiplicacion = multiplicar(5, 5);

//! En javascript TODAS LAS FUNCIONES RETORNAN ALGO, si no se lo decimos explícitamente retornarán UNDEFINED
console.log(saludar());

//* Desupués de un return NO SE EJECUTA MÁS CÓDIGO DE LA FUNCION. Javascript corta la ejecución de la función en ese punto.


const frase = 'hola qué ase'

frase.toUpperCase()


function convertirAMayusculas(texto) {
  if (typeof texto !== 'string') {
    return;
  }
  return texto.toUpperCase();
}

console.log(convertirAMayusculas(frase));
console.log(convertirAMayusculas(23));



//*************************************/

function saludo () {
  console.log('Hola');
}

saludo = '🐶'
console.log(saludo);

// saludo();

function despedida () { // 0x111
  console.log('Adios');  
}

const loQueSea = despedida; // 0x111
loQueSea();


// Podemos guardar dentro de una variable una FUNCIÓN SIN NOMBRE

const dividir = function (a, b) {
  console.log(a / b)
} 

// dividir = 23 //! YA NO SE PERMITE
dividir(10, 2);

//***********************************/






