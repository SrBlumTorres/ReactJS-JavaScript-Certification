// const $body = document.querySelector('body');


const $h1 = document.createElement('h1');

$h1.innerText = 'Soy un h1';

document.body.prepend($h1);

const $button = document.createElement('button');

$button.innerText = 'Haz click';
$button.className = 'rounded';
$button.style.backgroundColor = 'tomato';
$button.style.color = 'white';

// $button.setAttribute('data-id', '12345');
$button.dataset.id = '12345';

$h1.title = 'Soy un título';


$h1.after($button);
