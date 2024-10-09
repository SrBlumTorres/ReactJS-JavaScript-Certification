//? Bucles

//* Los usamos para REPETIR ALGO UN NÚMERO DE VECES
//* También para RECORRER ELEMENTOS ITERABLES (arrays, strings, objetos, etc.)

//* For......

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

for (let i = 5; i >= 1; i--) {
  console.log(i);
}



//* Recorrer un array


const frutas = ['🍎', '🍐', '🍌'];


for (let i = 0; i < frutas.length; i++) {
  const fruta = frutas[i];

  // lo que sea que quieras hacer
  console.log(fruta); 
}
 

//* array[i] => CADA VALOR DEL ARRAY EN CADA VUELTA

const frase = 'Con cien cañones por banda...';


for (let i = 0; i < frase.length; i++) {
  const letra = frase[i];
  console.log(letra);  
}



//*************************** */


//* break; y continue;

//* break 👉 Hace que se SALGA DEL BUCLE

for (let i = 0; i < frutas.length; i++) {
  const fruta = frutas[i];

  if (i === 1) {
    break;
  }
  console.log(fruta);
}

//* continue 👉 Solo se salta una vuelta del bucle

for (let i = 0; i < frutas.length; i++) {
  const fruta = frutas[i];
  
  if (i === 1) {
    continue;
  }
  console.log(fruta);
}


//******************************/

//* for...of 👉 La variable que creamos valdrá CADA VALOR DEL ARRAY
//! NO TENEMOS EL ÍNDICE PARA JUGAR

//! Siempre empieza desde el índice 0
//! Siempre llega hasta el final del array
//! Siempre va de uno en uno

const nums = [2, 6, -4, 13, -20];

for (const variable of nums) {
  console.log(variable);  
}

for (const num of nums) {
  console.log(num);  
}


//* for...in 👉 La variable que creamos SIEMPRE SERÁ EL ÍNDICE DEL ARRAY
//! Siempre empieza desde el índice 0
//! Siempre llega hasta el final del array
//! Siempre va de uno en uno



for (const i in nums) {
  console.log(nums[i]);  
  console.log(i);  
}


//*==================================


//* while 👉 Bucle que se repite mientras se cumpla la condición
//! Solo lo usamos si NO SABEMOS CUANTAS VUELTAS VA A DAR

let i = 0;
while (i < 5) {
  console.log(i);

  i++;  
}


let password = '1234';

while (password !== '1234') {
  password = prompt('Dime la contraseña');
  console.log(password);  
}

//* do...while 👉 Lo mismo que el while, pero SIEMPRE EJECUTA UNA VEZ EL CÓDIGO DENTRO, luego ya revisa la condición

let pass = '1234';
do {
  pass = prompt('Dime la pass');
} while (pass !== '1234');



