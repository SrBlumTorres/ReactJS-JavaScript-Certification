// 1.Añadid un h1 a mano CON JAVASCRIPT en el DOM con el texto que queráis. 

    // Crear el elemento h1
    const $nuevoH1 = document.createElement('h1');

    // Establecer el texto del h1
    $nuevoH1.textContent = 'Text was added with JS';

    // Agregar el h1 directamente al body
    document.body.prepend($nuevoH1);

// 2. Creáis un botón de forma MANUAL con JavaScript y lo añadís después del título.

    // Creamos el botón
    const $newButton = document.createElement('button');

    // Agregar el elemento después
    document.body.after($newButton);

// 3. Que el botón diga "Haz click aquí". 

    // Establecer el texto del Button
    $newButton.textContent = 'Click me!!';

// 4. A este botón le ponéis la clase "rounded" y en una hoja de estilos a parte, ponéis que tenga los bordes redondeados a 5px.

    // Ponemos la clase "rounded"
    $newButton.className = 'rounded';

// 5. Luego le añadís al botón estilos directamente DESDE JAVASCIRPT poniéndole un color de fondo "tomato" y un color de texto "white". 

    $newButton.style.cssText = `
        background-color: tomato;
        color: white;
    `;
    
// 6. Al mismo botón le añadís el atributo "data-id" con el valor 12345. 
    $newButton.id = 12345;

// 7. Al título h1 le añadís el atributo  title="Soy un título"
    $newButton.title = 'Soy un título';