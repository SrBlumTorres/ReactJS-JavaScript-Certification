# Ejercicios de Funciones, bucles y arrays

## Crea una función que llamaremos "range"

  1. Puede recibir un número, 2 o 3
  2. Si le pasamos un número, devolverá un array desde 0 a un número menor del que pasamos
  3. Si le pasamos 2 números, devolverá un array desde el primer número hasta uno anterior al segundo
  4. El tercer parámetro es opcional y sirve para decir el incremento de un número a otro. POR DEFECTO SERÁ 1

```js
  range(4) // [0, 1, 2, 3]
  range(4, 7) // [4, 5, 6]
  range(2, 7, 2) // [2, 4, 6]
```

## Crea una función para capitalizar un texto
Hay que vigilar que si pasan varios espacios se cuenten como uno
Todas Las Palabras Estarán Con La Primera Letra En Mayúscula


```js
capitalize('hola que tal') // 'Hola Que Tal'
capitalize('hola que       tal') // 'Hola Que Tal'
```

## Crea una función que recibirá un string, y un separador y te devolverá el mismo string ese separador entre las palabras

Hay que vigilar que si pasan varios espacios se cuenten como uno

```js
 textWithSeparator('hola que tal', '-'); // 'hola-que-tal'
 textWithSeparator('hola que       tal', '-'); // 'hola-que-tal'

```