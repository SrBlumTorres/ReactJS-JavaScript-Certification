const $form = document.querySelector('.form');



$form.addEventListener('submit', (event) => {
  // Primero siempre PARAREMOS LA RECARGA DE LA WEB
  event.preventDefault();
 
  console.log('Formulario enviado');


  // const name = $form.name.value;
  // const age = $form.age.value;

  const values = {
    name: $form.name.value,
    age: $form.age.valueAsNumber,
    birthday: $form.birthday.valueAsDate,
    favoriteColor: $form.favoriteColor.value,
    js: $form.js.checked,
    html: $form.html.checked,
    gender: $form.gender.value,
    city: $form.city.value,
    note: $form.note.value,
  };

  console.log(values);

  const formValues = new FormData($form);

  let valuesCool = Object.fromEntries(formValues.entries());
  
  valuesCool = {
    ...valuesCool,
    js: $form.js.checked,
    html: $form.html.checked
  }
  
  console.log(valuesCool);
  
});


//* Eventos típicos de formularios


//* change 👉 Se lanza cuando el valor del input cambia, pero lo hace cuando sueltas el ratón o sales del input

// $form.favoriteColor.onchange = () => {
//   const value = $form.favoriteColor.value;

//   document.body.style.backgroundColor = value;
// }


//* input 👉 Se lanza cuando el valor del input cambia, pero lo hace en todo momento, mientras lo cambias
$form.favoriteColor.oninput = () => {
  const value = $form.favoriteColor.value;

  document.body.style.backgroundColor = value;
}


const $noteOutput = document.querySelector('.note-output');

$form.note.oninput = () => {
  const value = $form.note.value;

  $noteOutput.innerText = value;
}

