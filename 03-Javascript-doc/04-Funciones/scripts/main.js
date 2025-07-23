// FUNCIONES

    // FUNCIÓN DECLARADA
        // Una función en JavaScript es un bloque de código reutilizable que realiza una tarea específica. Permite agrupar instrucciones y ejecutarlas solo cuando se le llama, lo que hace el código más organizado y eficiente. Una función puede recibir datos de entrada (parámetros) y, si es necesario, devolver un resultado.

        // Parámetros
            // Parámetros Posicionales
                // Son los parámetros básicos que se definen en el orden en el que la función espera recibirlos. Al llamar a la función, los valores pasados deben coincidir en orden con los nombres de los parámetros definidos.
            function posicionales (a, b){
                return a + b;
            }
                //· El orden es importante.
                //· Útiles en funciones que requieren valores específicos y fijos.

            // Parámetros con Valores por Defecto
                // Son parámetros que tienen un valor asignado en caso de que no se proporcione uno al llamar a la función. Esto es útil para evitar undefined en caso de que se omita el valor.
            function valorPorDefecto(valor = "Por defecto"){
                return valor;
            }
                //· Proporcionan valores iniciales sin necesidad de validar si existen.
                //· Útiles para parámetros opcionales.

            // Parámetros Rest (...rest)
                //Permiten capturar un número indefinido de argumentos en forma de array. Esto es útil cuando no sabes cuántos valores serán pasados y deseas manipular todos como una lista.
            function rest(...rest){
                const items = [];
                for (const element of rest) {
                    items.push(element);
                }
                
                return items;
            }
                //· Solo puede usarse como el último parámetro.
                //· Útil cuando una función puede recibir varios argumentos que deben manejarse juntos.

            // Parámetros de Desestructuración
                // Permiten extraer valores directamente de objetos o arrays pasados como argumentos, lo que es ideal para funciones que necesitan múltiples propiedades de un objeto.
            function desestructuracion(objectData) {
                const { email, password } = objectData;  // Desestructuramos el objeto para obtener `email` y `password`, recuerda que al desestructurar las variables deben llamarse igual que su dato desestructurado
                return `${email}: ${password}`;  // Devolvemos la cadena con los valores
            }
                //· Facilitan el acceso a valores específicos de un objeto o array.
                //· Ayudan a hacer el código más claro y legible cuando solo se necesitan ciertos valores.
            console.log(desestructuracion({ email: "ablum@example.com", password: "qwe123!" }));

            // Parámetros de Función como Callback
                // Las funciones también pueden recibir otras funciones como parámetros. Esto es común en programación asíncrona y funcional, donde las funciones "callback" (devolución de llamada) ejecutan una acción al final de otra.
            function llamandoACallback(callback, ...objectUser){
                return callback(objectUser);
            }
                
            console.log(llamandoACallback(rest, {email: "admin@test.net"}, {password: "1234"}, {city: "Barcelona"}));
            
                //· Permiten modular el comportamiento y añadir funcionalidad dinámica.
                //· Muy comunes en métodos de arrays (map, filter, reduce) y en programación asíncrona.

            // Parámetros Spread (...spread)
    

            function combinar(primer, segundo, ...resto) {
                console.log(primer); // primer elemento
                console.log(segundo); // segundo elemento
                console.log(resto); // todos los demás elementos
            }
              
            const numeros = [1, 2, 3, 4, 5];
            combinar(...numeros); // "spread" expande `numeros` y `rest` captura el resto



    // FUNCIÓN EXPRESADA
        // Recordemos que seguimos hablando de funciones por lo que se siguen compartiendo aspectos de uso, simplemente es otra manera de usar las funciones
        // Una función expresada es una función que se define como parte de una expresión, es decir, se asigna como valor de una variable, constante u otro tipo de expresión. Este tipo de función no tiene nombre propio (en cuyo caso se le llama función anónima), y solo se puede utilizar a partir de donde se declara, a diferencia de las funciones declaradas que se “levantan” (hoisting) al principio del código.

        const funcionExpresada = function (...items) {
            for (const element of items) {
                console.log(element);
            }
        }; 

        funcionExpresada(3, 2, 4, [3, 1, 2]);

        // Uso en callbacks: Las funciones expresadas son comunes en funciones de orden superior, como map, filter, o setTimeout. Al asignarse a una variable, son fáciles de pasar como argumento.

        const nombres = ['Ana', 'Luis', 'Juan'];

        const saludo = function(nombre) {
            return `Hola, ${nombre}!`;
        };

        const saludos = nombres.map(saludo);
        console.log(saludos); // Salida: ["Hola, Ana!", "Hola, Luis!", "Hola, Juan!"]


        // ¿Cuándo usar funciones expresadas?
            //· Cuando necesitas asegurarte de que una función no se invoque antes de su definición.
            //· En callbacks o funciones que vas a pasar como argumento a otra función.
            //· Para definir funciones de manera más modular y reutilizable en proyectos grandes.   



    // ARROW FUNCTION

        //* Si solo tiene un parámetro, TE PERMITEN QUITAR LOS PARÉNTESIS
        const saludar = nombre => {
            console.log('Hola, ' + nombre)
        };

        //* Si la función SOLO TIENE UNA LÍNEA DE EJECUCIÓN, te permita quitar las llaves
        const sumar =  (a, b) => console.log(a + b);

        // Resumen
            //· Sintaxis Compacta: La estructura simplificada y la diferencia con funciones tradicionales.
            //· Contexto Léxico de this: Explicación de cómo las funciones flecha mantienen el contexto, evitando problemas comunes con this.
            //· Ausencia de arguments y new: Aspectos importantes a tener en cuenta que afectan su uso en comparación con funciones normales.
            //· Uso Ideal: Contextos donde las funciones flecha son especialmente útiles.

        // Tips
            // * Si tengo que crear una función utilizo function
            // * Si tengo que pasar por 'parámetro' una función utilizo arrow functions !!
