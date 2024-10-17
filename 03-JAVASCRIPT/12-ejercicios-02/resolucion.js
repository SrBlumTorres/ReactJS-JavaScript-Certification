

function range (...opciones) {
  const arrayFinal = [];

  if (opciones.length === 1) {
    for (let i = 0; i < opciones[0]; i++) {
      arrayFinal.push(i);
    }
  } else if (opciones.length === 2) {
    for (let i = opciones[0]; i < opciones[1]; i++) {
      arrayFinal.push(i);
    }
  } else if (opciones.length === 3) {
    for (let i = opciones[0]; i < opciones[1]; i += opciones[2]) {
      arrayFinal.push(i);
    }
  }

  return arrayFinal;  
}

function range2 (min, max, gap = 1) {

  const arrayFinal = [];

  if (arguments.length === 1) {
    for (let i = 0; i < min; i ++) {
      arrayFinal.push(i);
    }
    return arrayFinal;
  } 


  for (let i = min; i < max; i += gap) {
    arrayFinal.push(i);
  }
  return arrayFinal;
}


range2(6, 7, 2)

function range2 (min = 0, max, gap = 1) {
  const arrayFinal = [];

  if (max === undefined) {
    max = min;
    min = 0;
  }

  for (let i = min; i < max; i += gap) {
    arrayFinal.push(i);
  }
  
  return arrayFinal;
}

console.log(range2(4))
console.log(range2(4, 7))
console.log(range2(4, 7, 2))
console.log(range2())


console.log(range(5)) // [0, 1, 2, 3, 4]
console.log(range(5, 9)) // [5, 6, 7, 8]




//************************************/


// function removeMultipleSpaces (text) {

//   const textFixed = text.replaceAll(/\s+/g, '-');

//   return textFixed;
// }

function removeMultipleSpaces (text) {

  const words = text.split(' ');

  const wordsWithText = [];
  
  for (const word of words) {
    if (word !== '') wordsWithText.push(word);
  }

  const textWithUniqueSpaces = wordsWithText.join(' ');

  return textWithUniqueSpaces;  
}

function capitalize (text) {

  text = removeMultipleSpaces(text);

  const words = text.split(' ');

  const wordsCapitalized = [];
  
  for (const word of words) {
    const firstLetter = word.charAt(0).toUpperCase();
    const rest = word.slice(1).toLowerCase();

    wordsCapitalized.push(firstLetter + rest);
    // wordsCapitalized.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  }

  const textCapitalized = wordsCapitalized.join(' ');
  
  return textCapitalized;
}


console.log(capitalize('con diez cañones por banda...'));
console.log(capitalize('con diez   cañones por banda...'));



// function textWithSeparator (text, separator = '-') {
//   text = removeMultipleSpaces(text);

//   return text.split(' ').join(separator);
// }

// function textWithSeparator (text, separator = '-') {
//   return text.replaceAll(/\s+/g, separator);
// }

const textWithSeparator = (text, separator = '-') => text.replaceAll(/\s+/g, separator);

console.log(textWithSeparator('con diez cañones por banda', '-'));
console.log(textWithSeparator('con    diez cañones por banda', '##'));