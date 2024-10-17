//? Cómo sabemos si un Array es un Array ==> Array.isArray()
console.log(typeof 23);
console.log(typeof []);
console.log(Array.isArray(23));
console.log(Array.isArray([23]));

//? Propiedades de los array

//* Length => longitud del array

const frutas = ['🍎', '🍐', '🍌']; // 0x888

console.log(frutas.length);

//? Métodos de los array

//* .reverse() 👉 Da la vuelta al array, lo invierte
//! muta el original

const frutasGirado = frutas.reverse();
console.log(frutasGirado);
console.log(frutas);

//! PARA SOLUCIONAR LO DE LA MUTACIÓN podemos usar el spread operator

const frutasReverse = [...frutas].reverse();
console.log(frutasReverse);
console.log(frutas);



//! Los 4 siguientes métodos MUTAN EL ARRAY
//* push(...items) 👉 Para añadir elementos al final del array

frutas.push('🍉');
frutas.push('🍈', '🍊');

console.log(frutas);


//* pop() 👉 Saca UN elemento del final y te lo retorna
console.log(frutas.pop());
frutas.pop();
frutas.pop();

console.log(frutas);


//* unshift(...items) 👉 Añade elementos al inicio del array
frutas.unshift('🍈', '🍊');
console.log(frutas);

//* shift() 👉 quita del principio
frutas.shift();
frutas.shift();

console.log(frutas);





//* indexOf(dato) 👉 Te dice el índice de donde se encuentra el dato que le has pasado

console.log(frutas.indexOf('🍎'));
console.log(frutas.indexOf('🍍'));

//* includes(dato) 👉 Devuelve true o false dependiendo de si se encuentra el dato en el array o no
console.log(frutas.includes('🍎'));
console.log(frutas.includes('🍍'));


//* slice(inicioCorte, finalCorte) 👉 Sirve para COPIAR UN TROZO de un array

const nums = [2, 4, 6, 8, 10];
console.log(nums.slice(1, 3));
console.log(nums.slice(2));

console.log(nums);

//* splice(inicioCorte, cantidadACortar) 👉 Corta un trozo de array y te lo devuelve
//! MUTA EL ARRAY ORIGINAL

const trozo = nums.splice(2, 2);
console.log(trozo);
console.log(nums);

//* tiene un extra, si le pasas un tercer parámetro, lo pondrá donde HA CORTADO

const trocito = nums.splice(1, 1, '🐕');
console.log(trocito);
console.log(nums);

//* también podemos NO QUITAR NADA y poner algo en un lugar

nums.splice(1, 0, '🐈');
console.log(nums);


//* join(separador) 👉 lo inverso al split, coge un array y lo transforma en un string añadiendole el separador a cada trozo

let stringDeUnArray = nums.join('');
stringDeUnArray = nums.join('@');
stringDeUnArray = nums.join('-');
stringDeUnArray = nums.join(' ');

console.log(stringDeUnArray);




//* concat() 👉 Para concatenar varios arrays

const array1 = [1, 2]
const array2 = ['a', 'b']



const array3 = array1.concat(array2)

console.log(array3);
console.log(array1);
console.log(array2);

const array4 = [...array1, ...array2];


















//* Hay métodos nuevos que hacen lo mismo que otros PERO SIN MUTAR

//* toReversed()

const arr1 = [1, 2, 3];

const arr2 = arr1.toReversed();
const arr3 = [...arr1].reverse();

console.log(arr1);
console.log(arr2);

//* toSpliced()

const arrModificado = arr1.toSpliced(1, 1, 0);
console.log(arrModificado);
console.log(arr1);





















