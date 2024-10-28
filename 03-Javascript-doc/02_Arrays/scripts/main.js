//Arrays
// Una de las cosas más a tener en cuenta a la hora de trabajar con arrays es el tipo de método que le estamos aplicando, ya que la mayoría "MÚTAN"!! el array y no siempre queremos eso, por eso veremos el operador ...spread

    // Acceso
        // Acesso mediante índice []
    const string = 'Bienvenidos al Camp Nou';
    console.log(string[0]);

    const arrCollection = ['Fútbol Club Barcelona', 'Real Madrid', 'Villareal', 'Valencia CF'];
    console.log(arrCollection[0]);
    // Si quiero acceder a su último elemento sin saber cuantos tiene
    console.log(arrCollection[arrCollection.length -1]);

    // at()
        // Permite acceder a elementos tanto desde el inicio como desde el final del array, usando índices negativos para acceder desde el final.
            // Retorno: Element at this position | Undefined
                // Tips
                    // Para acceder al último elemento del array a diferencia del accesso mediante índice [arr.lenght -1] aquí podemos añadir directamente el -1 y obtener el último elemento del array
    console.log(`Primer: ${arrCollection.at(0)} y último: ${arrCollection.at(-1)} equipos actuales de LaLiga`);



// Comparación
    // Comparar arrays en JavaScript puede ser más complicado que comparar tipos primitivos debido a que los arrays son tipos de referencia.
        // Operador de comparación estricta ===
            // Retorno : Boolean
                // Tips
                    // · Si intentas comparar dos arrays con ===, el resultado será false a menos que ambos sean exactamente la misma referencia en memoria (es decir, apuntan al mismo lugar)
                    // · Para comprobar si apuntan al mismo lugar arr3 = arr1
                    // · Si modificas el elemento se modifica su referencia también
    const collecNumb = [1, 2, 3];
    const numbCollec = [1, 2, 3]
    console.log(collecNumb === numbCollec);
    const collecNumbCopy = collecNumb;
    // Apuntan a la misma referencia en memoria por lo que devolverá true
    console.log(collecNumbCopy === collecNumb);
    
    // Comparación mediante bucle
        // Para poder comprobar que 2 arrays son exactamente iguales en cuanto a contenido y posición del contenido podemos utilizar un bucle e ir comprobado elemento a elemento
    function areArraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;

        for (let i = 0; i < arr1.length; i++) {   
            if (arr1[i] !== arr2[i]) return false     
        }

        return true;
    }

    console.log(areArraysEqual(collecNumb, numbCollec));
    

    
// Adición y extracción, modificación
    // --- AÑADIR nuevos elementos ---
        // push()
            // Añade uno o más elementos al "final" de un array y devuelve la nueva longitud del array.
            // Retorno: nuevo lenght
            // Tips
                // · push(), acepta como parámetros "...spread", lo que indica la infinidad de parámetros a recibir
    const animals = ['Águila', 'Toro', 'Tigre'];
    console.log(animals.push('Tiburón', 'Mono', 'León')); // Mostrará la nueva longitud
    console.log(animals);
    
    // unshift()
        // Agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del mismo.
        // Retorno: nuevo lenght
        // Tips
            // · unshift(), acepta como parámetros "...spread", lo que indica la infinidad de parámetros a recibir
        
    const engines = ['V10', 'V12'];
    console.log(engines.unshift('V6', 'V8')); // Retorna la nueva longitud o la actual
    console.log(engines);
    
    // ...spread operator 
        // --- Copiar ---
            // Permite "esparcir" o "expandir" elementos de un array, objeto, o cualquier iterable en un contexto donde se espera una lista de elementos.
                // Tips
                    // Con el operador spread, podemos copiar arrays sin que apunten al mismo lugar en memoria. Al hacer una copia convencional, se copia por referencia, lo que significa que cualquier cambio en la copia afecta al original. En cambio, el operador spread permite duplicar el contenido de un array sin alterar el original.
                    // Un tip a entender importante es que cuando usamos spread, es como si quitáramos los corchetes y pasáramos una cadena, ej:
                        // Si intentáramos hacer Math.max(arrayNumbers) obtendríamos NaN, por que no puede acceder ya que es un array, en cambio si hiciéramos Math.max(...arrayNumbers) obtendríamos el resultado de la función, ya que realmente lo que se hace es esparcir los elementos a la función
    // Caso 1
    const colors = ['red', 'blue'];
    const colorsCopy = colors;
    colorsCopy.push('yellow');
    console.log(colors);

    //Caso 2
    const colorsCopySpread = [...colors];
    colorsCopySpread.push('Brown');
    console.log(colors);
    console.log(colorsCopySpread);
    
        // --- Combinar ---
            // Combinación de arrays en uno nuevo

            // const totalColors = [colors, colorsCopySpread];
            // totalColors[0].push('Dark');
    const totalColors = [...colors, ...colorsCopySpread];
    console.log(totalColors);

        // --- Pasar elementos de un array como argumentos a una función ---
    const numbers = [10, 4, 19, 20];
    const mathOperation = Math.max(...numbers);
    console.log(mathOperation);

    // --- ELIMINAR ---
        // pop()
            // Elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array
            // Retorno: Elemento eliminado | Undefined si array está vacío
    const teams = ['Ferrari', 'RedBull Racing', 'Alpha Tauri', 'Mercedes F1 Team'];
    console.log(teams.pop());
    console.log(teams);
    
        // shift()
            // Elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.
            // Retorno: Elemento eliminado | Undefined si array está vacío
    console.log(teams.shift());
    console.log(teams);

        // splice()
            // Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
            // Retorno: Array vacío [] si no se ha eliminado nada | Array con los elementos eliminados
            // Tips
                // splice() accepta como parámetro ...spread
                // (posición, elementos a eliminar, nuevos elementos)
    const months = ['Enero', 'Marzo', 'Mayo'];
    months.splice(1, 0, 'Febrero');
    console.log(months);
    months.splice(3, 1, 'Abril');
    console.log(months);
    console.log(months.splice(2));
    months.splice(2, 0, 'Marzo', 'Abril', 'may');
    console.log(months);
    
        // Mirar método slice() de strings



// Modificación
    // Aparte de lo previamente comentado, recordemos que podemos hacer
    months[4] = 'Mayo';
    // months.at(3) = 'Abril'; // Error
    console.log(months);
    
// Ordenación
    // sort()
        // El método sort() en JavaScript organiza los elementos de un array en el lugar (modificando el array original). Si no se especifica una función de comparación, sort() convierte los elementos a texto y los ordena alfabéticamente, lo que puede dar resultados inesperados con números
        // Retorno array modificado ordenado
            // Tips
                // Los números si o si deben compararse con funciones, ya que en caso contrario podemos obtener resultados incorrectos

    const frutas = ['Manzana', 'Pera', 'Naranja', 'Naranja'];
    console.log(frutas.sort());
    console.log(frutas);
    
    const numeros = [25, 32, 42, 12, 15];
    // Orden descenciente
    console.log(numeros.sort((a, b) => b - a));
    console.log(numeros);
    
    // reverse()
        // Invierte el orden de los elementos de un array in place. El primer elemento pasa a ser el último y el último pasa a ser el primero
        // Retorno: array invertido
    console.log(frutas.reverse());
    console.log(frutas);
    
    //toSorted()
        // igual que sort () pero en este caso no modifica el array original
    // Orden ascendente sin modificación
    console.log(numeros.toSorted((a, b) => a - b));
    console.log(numeros);

    //toReversed()
        // Invierte el orden de los elementos de un array sin modificar el original
    console.log(frutas.toReversed());
    console.log(frutas);
    
// Examinación
    // Includes() detallado en la carpeta de strings
    // indexOf()
        // Retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente
        // Retorno: indice | -1
        // Tips
            // · Si el índice es mayor o igual a la longitud del array, devuelve -1
            // · Búsqueda estricta es decir ===
    const notas = [6, 8, 9, 10, 1, 3, 2, 4, '4'];
    console.log(notas.indexOf(10));
    console.log(notas.indexOf(10, 4)) // Me devolverá su índice, en caso contrario -1

    console.log(frutas.lastIndexOf('Naranja'));
    
    // lastIndexOf()
        // Devuelve la posicion (indice) en la que se encuentra el valorBusqueda, dentro del objeto String que realiza la llamada, de la última ocurrencia del valor especificado; o -1 si no se halla.
        // Retorno: indice | -1
    console.log(frutas.lastIndexOf('Naranja'));
    
    // find()
        // Devuelve el valor del "primer" elemento del array que cumple la función de prueba proporcionada (condición).
        // Retorno: Primer elemento en cumplir la función | Undefined
        // Tips

    console.log(notas.find(nota => nota >= 7));
    console.log(notas.find(nota => nota % 2 === 0));
    
    // findIndex()
        // Devuelve el índice del "primer" elemento de un array que cumpla con la función de prueba proporcionada (condición).
        // Retorno: Índice | -1
    console.log(notas.findIndex(nota => nota % 2 !== 0));
    
    // some()
    // Verifica si al menos un elemento cumple con una condición en una función de prueba, devolviendo true o false.

    // every() 
    // Verifica si "todos" los elementos cumplen con una condición en una función de prueba. Devuelve true si todos la cumplen y false si al menos uno no la cumple.
    // Retorno: Boolean
    // Tips
    console.log(notas.every(nota => typeof nota === 'number'));
    

    
// Reemplazo

// Concatenación