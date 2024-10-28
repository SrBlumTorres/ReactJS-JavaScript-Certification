// Tipos de valores

let nombre: string = 'Ivan';
let edad: number = 37;
let isMarried: boolean = true;
let hijos: null = null;
let noDefinido: undefined = undefined;

//! Cuando creamos las variables NO ES NECESARIO TIPAR NADA
//* Typescript es suficientemente inteligente como para INFERIR EL TIPO

let apellido = 'Luengo';


//! Si erróneamente intentas cambiar el tipo te lo va a poner en rojo
// isMarried = 23;



// Funciones
// Podemos tipar tanto los parámetros como lo que devuelve

function sumar (a: number, b: number): number {
  return a + b;
}

const restar = (a: number, b: number): number => a + b;


// sumar('hola', true)
sumar(20, 3);



//* Arrays

const frutas: string[] = ['manzana', 'pera'];
const numbers: Array<number> = [1, 2, 3];


//* Podemos decirle a alguna variable/parámetro que no solo puede ser de un valor sino de varios
let stringONumber: string | number = 'texto';
stringONumber = 25;


//* Podemos también decirle a una variable que solo puede guardar unos valores CONCRETOS

let tallaCamiseta1: 'sm' | 'md' | 'lg' | 'xl' = 'md';


tallaCamiseta1 = 'lg';


//* Podemos inventar tipos de datos NUEVOS usando TYPE

type Talla = 'sm' | 'md' | 'lg' | 'xl';

let tallaPantalon1: Talla = 'xl';

console.log(tallaPantalon1);


//* Tipando objetos

const persona1 = {
  nombre: 'Ivan',
  apellidos: 'Luengo',
  edad: 37
}

const persona2 = {
  nombre: 'Carlos',
  edad: 40,
}

persona1.nombre = 'Carlos';

// Quiero un array que solo guarde personas que tengan nombre, apellidos y edad

type Persona = {
  nombre: string;
  apellidos?: string;
  edad: number;
}

const personas: Persona[] = [];


personas.push(persona1);
personas.push(persona2);






