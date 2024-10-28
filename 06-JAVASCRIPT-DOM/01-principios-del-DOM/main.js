//* "Cazar" elementos del DOM

// console.log(window);
// console.dir(window.document);

const $h1 = document.getElementById('titulo');

console.log($h1); // 0x4354

//! Query selector solo te devuelve EL PRIMER ELEMENTO DEL DOM QUE CONCUERDE
const $liItem2 = document.querySelector('.lista-1 > li');
console.log($liItem2);


//! Para guardar varios elementos que coincidan usamos querySelectorAll

const $lista2Lis = document.querySelectorAll('.lista-1 > li');
console.log($lista2Lis);

//* Queryselector NO HACE FALTA USARLO CON document


const $lista2 = document.querySelector('.lista-2');
const $lista2li1 = $lista2.querySelector('li');

console.log($lista2li1);


//***************************/


//* Ver datos de esos elementos o cambiar sus datos

const $h2 = document.querySelector('.h2');
const $foto = document.querySelector('.foto');
const $input = document.querySelector('.input');


// leer
console.log($h2.id);
console.log($h2.className);
console.log($h2.title);

console.log($foto.src);
console.log($foto.alt);


console.log($input.type);
console.log($input.value);
console.log($input.placeholder);

// modificar

$h2.id = 'titulo-cool'
$h2.className = 'mt-5 text-red'
$h2.title = 'Soy un titulazo'
$foto.src = 'https://picsum.photos/id/30/200'
$foto.alt =  'foto de una taza'


$input.type = 'password'
$input.value = 'is married'
$input.placeholder = 'Contraseña'

// contenido
console.log($h2.innerText);
$h2.innerText = 'Cambiado desade JavaScript <u>innerText</u>';


console.log($h2.innerHTML);
$h2.innerHTML = 'Cambiado desade JavaScript <u>innerHTML</u>'


// universal  getAttribute y setAttribute

console.log($foto.getAttribute('data-id'));

$foto.setAttribute('data-city', 'Barcelona');


//*********************************/

//* Con las clases usamos otro método distinto  classList


$h2.classList.add('bg-red', 'd-flex');
$h2.classList.remove('d-flex');

$h2.classList.replace('text-red', 'text-green');

$h2.classList.toggle('toggle');



//****************************/

//? ESTILOS CSS
$h2.style.fontSize = '3rem';
$h2.style.backgroundColor = 'red';


// también podemos escribir css largo


$foto.style.cssText = `
  outline: 2px solid black;
  box-shadow: 5px 5px 5px 0px indigo;
  border-radius: 1rem;
`;

//***********************************/

//* Crear elementos que NO EXISTEN EN EL DOM


//* 1: Crear el elemento en memoria

const $article = document.createElement('article');

console.log($article);


//* 2: Ponle a ese elemento todas las clases y atributos que quieras

$article.classList.add('mx-auto', 'flex');
$article.setAttribute('data-id', '93285634')



//* 3: Ponle el contenido que te plazca

$article.innerHTML = `
  <h3>Proyecto 2</h3>
  <p>otjwer gerpg ergjre pgrejgñrejk gorejk gpreo gjrepgj pregj pergj</p>
`;

//* 4: Mételo en el DOM donde te de la gana
//! Siempre necesitamos el padre del elemento donde lo vas a meter
const $projectsSection = document.querySelector('.projects');


// si lo quiero meter dentro AL FINAL DEL TODO
$projectsSection.append($article);


// si lo quiero dentro AL PRINCIPIO
$projectsSection.prepend($article);


//si lo quiero fuera del padre DETRÁS
$projectsSection.after($article);

//si lo quiero fuera del padre ANTES
$projectsSection.before($article);



//* Borrar un elemento del DOM
$foto.remove();






