"use strict";

// Bucles

    //* El bucle "for..." en JavaScript es una estructura de control fundamental que te permite ejecutar un bloque de código un número específico de veces. Es especialmente útil cuando conoces de antemano cuántas veces necesitas iterar.

        // for (inicialización; condición; actualización) {
            // Código a ejecutar en cada iteración
        // }

        //· Inicialización: Aquí se inicializa una variable de control (por ejemplo, let i = 0). Este paso se ejecuta una sola vez al comienzo del bucle.

        //· Condición: Esta expresión se evalúa antes de cada iteración. Si es verdadera (true), se ejecuta el bloque de código dentro del bucle. Si es falsa (false), el bucle se detiene.

        //· Actualización: Esta expresión se ejecuta al final de cada iteración del bucle. Generalmente, se utiliza para incrementar o modificar la variable de control (por ejemplo, i++).

        //· Usa break para salir del bucle anticipadamente y continue para saltar a la siguiente iteración.

        const items = ['Perro ', 'Gato', 'León', 'Serpiente', 'Águila'];

        for (let i = 0; i < items.length; i++) {
            console.log(items[i]);
        }

        // Recorrido inverso
        for (let i = items.length -1; i >= 0 ; i--) {
            if (items[i] === 'Gato') break;
            console.log(items[i]);
        }

        console.log(3);
        
    //* El bucle for...of es una estructura de control en JavaScript que se utiliza para iterar sobre elementos de colecciones iterables, como arrays, strings, objetos Map, Set y otros objetos que implementan el método [Symbol.iterator]. Es una forma sencilla y legible de acceder a cada elemento de una colección sin necesidad de gestionar índices.

        //· elemento: es la variable que contendrá el valor de cada elemento de la colección en cada iteración.
        //· iterable: es cualquier objeto que se puede iterar, como arrays, strings, Set, Map, etc.

        const emoticons = ['👻', '🚀', '⚽️', '🏎️', '🏁'];

        for (const emoticon of emoticons) {
            console.log(emoticon);
        }

        //? Ventajas del bucle for...of
            // Simplicidad:
                //· No necesitas preocuparte por los índices, lo que simplifica el código y lo hace más legible.

            // Acceso directo a elementos:
                //· Accedes directamente al valor de cada elemento, evitando la necesidad de utilizar array[index].

            // Compatible con colecciones no indexadas:
                //· Funciona con cualquier objeto iterable, no solo arrays. Esto incluye strings, Set, y Map.

        const string = 'Lista de elementos';
        for (const letter of string) {
            console.log(letter); //
        }

    //! CONSIDERACIONES
        //· No se puede usar con objetos regulares: El bucle for...of no funcionará directamente en objetos que no son iterables. Para recorrer las propiedades de un objeto, debes usar for...in.
        //· No tiene acceso al índice: Si necesitas el índice de cada elemento, considera usar un bucle for tradicional o el método forEach().



    //* for... in
        // El bucle for...in es una estructura en JavaScript que permite recorrer las propiedades de los objetos y los índices de los arrays. A diferencia de for...of, que itera sobre los valores de un iterable, for...in itera sobre las claves (o índices en el caso de un array) de un objeto.

        // Ejemplo de uso con objeto
        const libro = {
            titulo: '1984',
            autor: 'George Orwell',
            año: 1949
        };
          
        for (const clave in libro) {
            console.log(`Propiedad: ${clave}, Valor: ${libro[clave]}`);
        }
        
        // Ejemplo con array 
        // También puedes usar for...in para recorrer un array, pero ten en cuenta que en este caso iterará sobre los'índices' y no sobre los valores.

        const frutas = ['manzana', 'pera', 'naranja'];

        for (const indice in frutas) {
            console.log(frutas[indice]);
        }

        //! CONSIDERACIONES
            // Consideraciones y consejos de uso
                //· Solo recorre claves o índices: for...in es ideal cuando necesitas trabajar con las claves de un objeto. Si necesitas los valores de un array o iterable, es mejor utilizar for...of.
            
                //· No recomendado para arrays en muchos casos: Aunque for...in funciona con arrays, no es la mejor opción en la mayoría de los casos. Esto se debe a que:
                    //· for...in también puede incluir propiedades heredadas en el prototipo del array, lo que puede provocar resultados inesperados.
                    //· Si se han añadido propiedades no numéricas al array (por ejemplo, frutas.nombre = "Frutas tropicales"), el for...in también las recorrerá, lo cual no sucede con un for...of o un for convencional.
                //· Mejor para objetos: for...in es ideal para recorrer objetos literales en los que quieres acceder a las claves y valores.



    //* while...
        // Repite un bloque de código mientras una condición especificada sea verdadera. Es útil cuando no sabemos de antemano cuántas veces se ejecutará el bucle, pero sabemos que debemos continuar mientras se cumpla cierta condición.

        // Flujo
            //· Verifica la condición.
            //· Si es true, ejecuta el bloque de código.
            //· Después de cada ejecución, vuelve al paso 1 para verificar la condición nuevamente.

        // Ej
        let contador = 0;
        let x = 0;

        while (contador < 3) {
            contador++;
            console.log(`Contador => ${contador}`);

            x += contador;
            console.log(`Contador por asignación => ${x}`)
        }

        // contador
        //! CONSIDERACIONES
            //· Solo lo usamos si NO SABEMOS CUANTAS VUELTAS VA A DAR

// 5. Bucle for...of y for...in:
// · Considera utilizar for...of para iterar sobre arrays y objetos iterables
// · for...in para recorrer propiedades de objetos. for...of es más moderno y más seguro para arrays.


// Transformar a md, es una tabla! 
// 5. Comparación con otros bucles
// Tipo de bucle	Ideal para	Itera sobre	Notas
// for...of	Arrays e iterables	Valores	No se usa para objetos; requiere valores iterables.
// for...in	Objetos y arrays con índices específicos	Claves (o índices en arrays)	Puede recorrer propiedades heredadas en arrays.
// for convencional	Arrays y estructuras controladas	Índices controlados	Ideal para mayor control sobre la iteración.

// let b = prompt();

// while (b >= 50 || b <= 100){
//     b;
// }
