// import name from './helpers/operaciones.js';
// import { sumar, restar } from './helpers/operaciones.js';
// import nombre, { sumar, restar } from './helpers/operaciones.js';

//* También podemos usar un alias para cambiar algo que has importado
import nombre, { sumar as suma, restar as resta } from './helpers/operaciones.js';


//* Podemos importar TODO DE GOLPE
import * as operations from './helpers/operaciones.js';

console.log(operations);
console.log(operations.sumar(5, 5));


console.log('Archivo Principal');

console.log(nombre);

console.log(suma(4, 5));
console.log(resta(4, 5));


