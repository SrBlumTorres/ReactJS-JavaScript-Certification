//? Desestructuración de arrays

const fruits = ['🍎', '🍐', '🍌'];

const manzana = fruits[0];
const pera = fruits[1];
const platano = fruits[2];

//! Lo importante es que DA IGUAL EL NOMBRE QUE LES PONGAS, LO IMPORTANTE ES EL ORDEN
const [apple, pear, banana] = fruits;

//* Si quieres saltarte un valor dejas un hueco sin usar

const [poma,  , platan] = fruits;

console.log(poma, platan);

console.log(`Me encantan las ${fruits[0]}, las ${fruits[1]} y los ${fruits[2]}`);
console.log(`Me encantan las ${manzana}, las ${pera} y los ${platano}`);
console.log(`Me encantan las ${apple}, las ${pear} y los ${banana}`);


function operacionesArray (numA, numB) {
  const suma = numA + numB;
  const resta = numA - numB;
  const multiplicacion = numA * numB;
  const division = numA / numB;

  return [suma ,resta, multiplicacion, division];
}

// const resultados3y5 = operacionesArray(3, 5);

// const resta3y5 = resultados3y5[1];
// console.log(resta3y5);

// const [ , resta3y5] = resultados3y5;

const [ , resta3y5, , division3y5] = operacionesArray(3, 5);

console.log(resta3y5, division3y5);

const [suma6y7, resta6y7] = operacionesArray(6, 7);



//? Desestructuración de objetos

const user = {
  username: 'ivluengo',
  isAdmin: true,
  email: 'ivluengo@gmail.com'
}

// const email = user.email
// const email = user.email
// const email = user.email
// const email = user.email

//! Lo importante es que DA IGUAL EL ORDEN, LO IMPORTANTE ES EL NOMBRE

const { username, email } = user;

console.log(username, email);

function operacionesObjeto (numA, numB) {
  const suma = numA + numB;
  const resta = numA - numB;
  const multiplicacion = numA * numB;
  const division = numA / numB;

  return { suma , resta, multiplicacion, division };
}


//* Lo bueno, es que nos permiten usar ALIAS para cambiar el nombre de una propiedad

const { multiplicacion: multi5y3 } = operacionesObjeto(5, 3);

const { multiplicacion: multi4y2 } = operacionesObjeto(4, 2);




