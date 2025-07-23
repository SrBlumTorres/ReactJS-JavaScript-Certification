// Comparación
    // En JavaScript tenemos la oportunidad de utilizar los operadores de comparación '==' / '===' para comparar strings directamente y además de manera estricta indicando también el tipo de dato

    function stringCompare(element1, element2) {
        return element1 === element2;
    }

    console.log(stringCompare(null, undefined)) // True en caso de comparación convencional '==' y no estrica;
    // console.log(stringCompare(Date.now(), Date.now()));


// Extracción
    // Pese a que actualmente el método substr() esté marcado como 'deprecated' se sigue utilizando, junto a otros métodos más modernos como slice() o substring()
        // slice()
            // Devuelve una 'copia' de una parte del array dentro de un nuevo array empezando por inicio hasta fin '(fin no incluido)'
            // Retorna
                // · Si inicio es omitido el valor por defecto es 0
                // · Si inicio es mayor a la longitud del array, se devuelve un array vacío
                // · Si el índice es negativo, empezará desde el final (2, -1) 'desde el tercer hasta el penúltimo elemento'
                // · Si fin es omitido, slice extrae hasta el final de la secuencia (arr.length)
    function extractionOfElements(desde = 0, hasta){
        const arrData = ['Manzana', 'Pera', 'Mango', 'Piña'];
        const stringData = 'Hola amigo mío, ¿cómo estás?';

        if (desde !== 0){
            return arrData.slice(desde, hasta);
            return stringData.slice(desde, hasta);
        }

        return arrData.slice(hasta);
    }

    console.log(extractionOfElements(1, 3));
    
    // substring()
        // El método substring() devuelve un subconjunto de un objeto 'String'.
        // Retorno
            // Si indiceA es igual a indiceB, substring devuelve una cadena vacía
            // Si se omite el indiceB, substring extrae caracteres hasta el final de la cadena
            // Si el argumento es menor que 0 o es NaN, se trata como si fuese 0
            // Si el prrimer elemento es más grande que el segundo es como si le diéramos la vuelta (a == b) y (b == a)

    function subsExtraction(start = 0, end){
        const stringData = 'Hola amigo mío ¿Cómo estás?';

        if(start !== 0){
            return stringData.substring(start, end);
        }

        return stringData.substring(end);
    }

    console.log(subsExtraction(2, 5));
    console.log(subsExtraction(2));
    // console.log(subsExtraction(0, 5));


// Acceso
    // Existen 2 maneras de acceder a un carácter individual en una cadena, cadena[posición] y charAt(posición)
    console.log('Posicionamiento'.charAt(5));
    console.log('Fútbol'[3]);
    

// Examinación
    // Cabe destacar que a grandes rasgos los métodos de strings, sirven también para los arrays, ya que para acceder a su dato se utilizan posiciones, igual que los arrays, comprobar siempre el método antes de utilizar
        // includes(:string :int :array) : Bool 
            // Determina si una matriz/string incluye un determinado elemento, devuelve true o false según corresponda
            // Tips
                // · Si el segundo parámetro (param1, param2) >= que la longitud del string devuelve false esté o no el param1
                // · Si el índice calculado es menor que 0, se buscará la matriz completa.
                // · Al ser un método genérico puede recibir cualquier tipo de dato
                // Búsqueda estricta '==' esto no, esto si ===
    
    const collection = [2, 4, '3', 'Hola', 7];
    const str = 'Examinación de strings en Javascript';
    console.log(collection.includes(7));
    console.log(str.includes('Ex', -100));
    console.log(str.includes('Ex', 4));

    // startsWith()
        // Indica si una cadena de 'texto' comienza con los caracteres de una cadena de texto concreta, devolviendo true o false según corresponda.
            // Retorno : Bool
    const urlValidateSSL = 'http://testing.net';
    console.log(urlValidateSSL.startsWith('https'));

    // endsWith()
        // Determina si una cadena de texto termina con los caracteres de una cadena indicada
            // Retorno : Bool
    const file = 'script.ssh';
    console.log(file.endsWith('.pdf'));

     
// Reemplazo
    // replace() param1 / param2 (puede ser una función) = Callback()
        // Este método permite reemplazar la primera aparición de un patrón en una cadena. Puede usarse con un string literal o con expresiones regulares para realizar búsquedas más complejas.
        // Tips
            // ·Si el patrón es "", reemplazo será añadido al inicio de la cadena.
            // ·Si regexp(patrón) con el parámetro g es el único caso donde replace() reemplaza más de una vez.


    function replaceToUpper (element){
        return element.toUpperCase();
    }

    const phrase = 'JavaScript es genial, pero JavaScript puede ser complejo.'
    console.log(phrase.replace('e', replaceToUpper));
    console.log(phrase.replace('JavaScript', 'JS'));

    // replaceAll()
        // Similar a replace, pero reemplaza 'todas' las apariciones del patrón, sin necesidad de regEx
        // replaceAll(: sring | regExp, :string | function)
    //

    console.log(phrase.replaceAll('JavaScript', 'JS'));
    console.log(phrase.replaceAll('', '_'));

    // El método slice() podría utilizarse también, pese a que no sea muy común

// Expresiones regulares
    // test()
        // Verifica si una cadena coincide con una expresión regular. Devuelve true si hay al menos "una" coincidencia
        // Retorno : Boolean
            // Tips
                // · regex no lleva comillas !!, pese a que parezca que si

    let regex = /\d+/;  // Busca al menos un dígito
    const cadena = 'Tengo 24 años y tú?';
    console.log(regex.test(cadena));

    const email = 'ablum@gmail.com'
    regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    console.log(regex.test(email));
    

    // match()
        // Devuelve un "array" con las coincidencias encontradas según el patrón de la expresión regular
        // Retorno : array | null
            // Tips
                // Si no se proporciona ningún parámetro y se utiliza el método match() directamente, se obtendrá un  ['']

    function regExValidation(stringTocheck, regularExpresion) {
        return stringTocheck.match(regularExpresion);
    }

    let stringTocheck = 'Los correos son: #id-123 user1@gmail.com, #id-212 user2@hotmail.com, #id-98 user@domain.dom';
    let regularExpresion = /@(\w+\.\w+)/g;
    console.log(regExValidation(stringTocheck, regularExpresion));
    regularExpresion = /#\w+-\d+/g;
    console.log(regExValidation(stringTocheck, regularExpresion))
    
// División
    // split()
        // Es el método principal para dividir o “separar” una cadena en partes, y es especialmente útil porque permite crear un array de subcadenas en base a un separador definido, ya sea un carácter, una expresión regular o incluso un texto específico.
    const string = 'Now, never, risk, and rich';
    console.log(string.split());
    console.log(string.split(''));
    console.log(string.split(',', 3));

// Concatenación
    // Operador + o +=
        // Realiza una suma (que puede ser una suma numérica o una concatenación de cadenas
    let concat = 'Hola ';
    concat += 'cómo ';
    console.log(concat);
    
    // Backticks ``
        // Con ellas, es posible utilizar cadenas de caracteres de más de una línea, y funcionalidades de interpolación de cadenas de caracteres.
    const user = 'ablum';
    const saludo = `Welcome to the platform ${user}`;
    console.log(saludo);
    
    // Join()
        // Une todos los elementos de un Array en una cadena
        // Si tienes un array de strings y necesitas unir todos sus elementos en una sola cadena, puedes usar join()

    const stringToJoin = string.split(',', 3); // []
    console.log(stringToJoin.join());
    
    