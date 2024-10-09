//? DATOS PRIMITIVOS

//* String

// const ciudad = new String('Barcelona');

const nombre = 'Ivan';
const apellido = "Ivan";
const nombreCompleto = `Ivan`;

console.log('apellido =>', apellido);



console.log(typeof apellido);


//* Number

// const miEdad = new Number(37);

const edad = 37;
const temperatura = -17;
const fraccion = 0.333;

console.log('fraccion =>', fraccion);


console.log(typeof edad);

//* Boolean

const estoyCasado = true;
const tengoHijos = false;

console.log('estoyCasado =>', estoyCasado);

console.log(typeof estoyCasado);

//* undefined
// normalmente esto siempre te viene dado. Cuando nadie le ha dado un valor a algo, normalmente es undefined

let perro;

console.log('perro =>', perro);

console.log(typeof perro);

//* null
// Es cuando EXPLÍCITAMENTE QUIERO GUARDARLE UN VALOR NULO

let user = null;

console.log('user =>', user);

//! curiosidad de Javascript, el typeof deberia ser null no object
console.log(typeof user);



//? DATOS NO PRIMITIVOS


//* Arrays  --> Para guardar muchas cosas DISTINTAS en una misma variable

const frutas = ['🍎', '🍌', '🍐'];
const vario = [20, true, 'hola', null, undefined, [1, 2]]

console.log(frutas);

console.log(typeof frutas); // object


//* Objects --> Para guardar varios valores PERO QUE HABLAN DE UNA MISMA COSA

const persona = {
  nombre: 'Ivan',
  edad: 37,
  ciudad: 'Barcelona',
  estaCasado: true
};

console.log(persona);

console.log(typeof persona);


//* Funciones --> Bloques de código reutilizables

function saludar () {
  console.log('¡Hola!');
}

saludar();

