const $h1 = document.querySelector('h1');
const $btn1 = document.querySelector('.btn-1');
const $foto1 = document.querySelector('.foto-1');
const $input1 = document.querySelector('.input-1');

$btn1.onclick = (event) => {
  // console.log('ctrl ', event.ctrlKey);
  // console.log('alt ', event.altKey);
  // console.log('shift ', event.shiftKey);

  // A cuanto estoy de arriba a la izquierda (0 0)
  console.log('x: ', event.clientX);
  console.log('y: ', event.clientY);

  //* Target te devuelve el Objeto del DOM que ha lanzado el evento
  console.log(event.target);  
};


$input1.addEventListener('keyup', (event) => {
  // console.log(event.key);

  if (event.key === 'Enter') {
    console.log('Has apretado enter');    
  }
  
});


