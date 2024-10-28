//? Objetos



const person = { // 0x123
  name: 'Ivan',
  age: 37,
  isMarried: true,
  friends: ['Carlos', 'Alfredo'],
  features: {
    eyes: 'verdes',
    hair: 'rubio'
  },

  talk: function () {
    console.log('Hola qué áse...');    
  },

  'dog number': 2
}

console.log(person);


//* Para acceder a una propiedad usamos el punto

console.log(person.name);

console.log(person.friends[0]);

console.log(person.features.eyes);

//* Tenemos otra forma de acceder a un dato de un objketo y es usando los corchetes y llamando al nombre de la propiedad con un string

console.log(person['isMarried']);
console.log(person.friends[0]);

console.log(person['dog number']);


//* También podemos sacar una propiedad de un objeto SIN SABER EL NOMBRE DE LA PROPIEDAD, por ejemplo si me pasan el nombre de un select de un formulario.

const selectValue = 'isMarried';

console.log(person[selectValue]);



//* También podemos crear nuevas propiedades de las cuales no sabemos el nombre

const selectCreateValue = 'email';
const createValue = 'ivluengo@gmail.com';

const user = {
  username: 'ivluengo',
  age: 37,
  [selectCreateValue]: createValue
}

console.log(user);

//**********************************/

//* Podemos modificar un valor de un objeto simplemente asignándole algo a una propiedad

person.age = 40;
person.birthMonth = 'January';

console.log(person);
console.log(person.dskhgd);


//************************************** */

//* Los objetos también se duplican por referencia

const obj1 = { // 0x999
  name: 'Ivan',
  age: 37
}

const obj2 = obj1; // 0x999


const obj3 = { ...obj1 };  // 0x444

console.log(obj3);

//* También puedo combinar objetos

const obj4 = {
  name: 'Jessica',
  dogs: 2
};

const obj5 = { ...obj4, ...obj3 };
console.log(obj5);


//* Puedo duplicar un objeto y cambiarle o añadirle valores nuevos


const person2 = {
  ...person,
  name: 'Sergio',
  city: 'Barcelona'
}

console.log(person2);
















//* EXTRA: la class Object tiene algunos métodos interesantes

const user1 = { // 0x999
  name: 'Ivan',
  age: 37
}

console.log(Object.values(user1));
console.log(Object.keys(user1));

// entries crea un array de arrays con arrays de parejas llave, valor
console.log(Object.entries(user1));


// Object.fromEntries() hace lo contrario, de un array de arrays, te genera un nuevo objeto

function creadorDeObjetos (...parametros) {
  console.log(parametros);

  const objeto = Object.fromEntries(parametros);
  
  console.log(objeto);  
}
creadorDeObjetos(['nombre', 'Ivan'], ['edad', 37])



//* EXTRA 2:  Existe un operador ?  Que sirve para evitar que Javascript Corte la ejecución si intentamos acceder a un valor null o undefined



const dog1 = {
  name: 'Kira',
  features: {
    eyes: 'brown',
    hair: 'short'
  }
}

const dog2 = {
  name: 'Freya',
  age: 7
}


console.log(dog2.name);

console.log(dog1.features);
console.log(dog2.features);



console.log(dog1.features.eyes);


// Comprobación básica
if (dog2.features !== undefined) {
  console.log(dog2.features.eyes);
}

// Comprobación con ? (optional chaining)
console.log(dog2.features?.eyes);

console.log('Hola');




//* EXTRA 3: Podemos recorrer un objeto con el for...in

for (const index in user1) {

  console.log(index);
  console.log(person[index]);  
  
}
