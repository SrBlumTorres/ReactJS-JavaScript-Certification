const $btn1 = document.querySelector('.btn-1');
const $h1 = document.querySelector('h1');
const $foto1 = document.querySelector('.foto-1');
const $input1 = document.querySelector('.input-1');


//* añadimos un listener a un elemento del DOM

function saludar () { // 0x123
  console.log('hola');  
}

$btn1.addEventListener('click', saludar); // 0x123

// $btn1.addEventListener('click', function () {})
$btn1.addEventListener('dblclick', () => {
  console.log('Has hecho doble click');  

  $h1.classList.toggle('red');

  // $h1.innerText = '🤘';
});


//* mouseenter 👉 Cuando el mouse entra dentro

$foto1.addEventListener('mouseenter', () => {
  console.log('Has entrado');  
  $foto1.src = 'https://picsum.photos/id/201/200'
});

//* mouseleave 👉 Cuando el mouse sale de la caja
$foto1.addEventListener('mouseleave', () => {
  console.log('Has salido'); 
  $foto1.src = 'https://picsum.photos/id/200/200' 
});



//* mousemove 👉 Por cada pixel que el mouse se mueve por dentro de la caja
$foto1.addEventListener('mousemove', () => {
  console.log('Te estás moviendo por dentro');  
});


//? teclado

//* keydown 👉 cuando apretas una tecla

$input1.addEventListener('keydown', () => {
  console.log('Tecla apretada');  
})

//* keyup 👉 cuando levantas el dedo de una tecla
$input1.addEventListener('keyup', () => {
  console.log('Tecla levantada');  
})




//? scroll

window.addEventListener('scroll', () => {
  console.log('Estás scroleando');
});

window.addEventListener('resize', () => {
  console.log('Estás cambiando el tamaño de la ventana');
});


//********************************/
//* Podemos añadir un evento usando la propiedad on..... del objeto cazado del DOM



$input1.onfocus = () => { 
  // $input1.style.outline = '2px solid crimson';
}

$input1.onblur = () => { 

  // cada vez que haces blur compuerbas el valor del input
  if(true) {
    $input1.classList.remove('invalid');
  }else {
    $input1.classList.add('invalid');
  }
}


//! Lo malo de usar las propiedades on.... es que no puedes poner más de un evento del mismo tipo

// $input1.onblur = //! Me estoy petando el de arriba

//************** */
//* Tenemos que saber como QUITAR UN LISTENER DE UN ELEMENTO



function handleButtonScroll () { // 0x999
  console.log('Último click');  
}


$btn1.addEventListener('click', handleButtonScroll);

$btn1.removeEventListener('click', handleButtonScroll);



