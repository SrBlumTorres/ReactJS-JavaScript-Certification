"use strict";

// Formato de Iniciales
// Dado un array de nombres completos, genera un nuevo array que contenga las iniciales de cada nombre en mayúscula.

// Ejemplo: ["Ana Gomez", "Carlos Ruiz", "Sofia Rodriguez"] debe transformarse en ["A.G.", "C.R.", "S.R."].

function formatOfInitials(names){
    //Expected [A.B, A.C]
    const result = [];
    const aux = [];

    for (let i = 0; i < names.length; i++) {
        aux.push(names[i].split(' '));
        for (let j = 0; j < aux[i].length; j++) {
            result.join(',');
            result.push(aux[i][j][0].toUpperCase());
       }
    }

    console.log(result);
    

    // return names;
}
console.log(formatOfInitials(['Ana Gomez', 'Carlos Ruiz', 'Sofia Rodriguez']));


console.log(3);































// Escribe una función que, dado un array de strings que contiene nombres de frutas repetidas, devuelva un array con los nombres de frutas que solo aparecen una vez. Usa los métodos que consideres para asegurarte de que el array de frutas final no contenga duplicados.
// Ejemplo: ['manzana', 'pera', 'manzana', 'naranja', 'pera', 'kiwi'] debería devolver ['naranja', 'kiwi'].
// Concatenación y ordenación de arrays de números

// Tienes dos arrays de números array1 y array2. Crea una función que los una en un solo array, elimine los números duplicados y los ordene en orden descendente.
// Ejemplo: dados array1 = [4, 5, 9, 3] y array2 = [7, 3, 6, 5], el resultado debería ser [9, 7, 6, 5, 4, 3].
// Modificación de elementos en un array

// Escribe una función que acepte un array de nombres de equipos y reemplace todos los nombres que comiencen con la letra "A" por la palabra "Anonimo". Además, si el array tiene menos de cinco elementos, agrega nombres de equipos ficticios para que el array final tenga al menos cinco elementos.
// Ejemplo: ['Ajax', 'Barcelona', 'Atlético', 'Manchester'] debería devolver ['Anonimo', 'Barcelona', 'Anonimo', 'Manchester', 'Equipo Ficticio'].
// Extracción de números de un string

// Dado un string que contiene texto y números mezclados, escribe una función que extraiga todos los números y devuelva un array con ellos en orden de aparición.
// Ejemplo: dado "Mi código postal es 28080 y mi número de casa es 42", el resultado debería ser [28080, 42].




























async function getWeatherByAsyncAwait(latitude, longitude) {
    const $span = document.querySelector('.result');
    console.log($span);
    
    const getLatitude = parseFloat(latitude);
    const getLongitue = parseFloat(longitude);

    // const BASE_API_URL = 'http://api.openweathermap.org/data/2.5/forecast';
    const BASE_API_URL = 'https://api.openweathermap.org/data/3.0/onecall';
    // const GEOLOCATION_URL = 'http://api.openweathermap.org/geo/1.0/direct?q={city name}&appid={API key}'
    // const CURRENT_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}&units=metric&lang=es';
    const API_TOKEN = '6c3c238757b144fc3fe0c3e9d074b3aa';

    // https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}
    // https://api.openweathermap.org/data/3.0/onecall?lat=undefined&long=undefined&exclude=hourly,daily&appid=6c3c238757b144fc3fe0c3e9d074b3aa
    try {
        // Llamada a la api + paso de credenciales y parámetros
        const response = await fetch(`${BASE_API_URL}?lat=${getLatitude}&long=${getLongitue}&exclude=hourly,daily&appid=${API_TOKEN}`);
        
        // Transformamos la respuesta a JSON, que será nuestra DATA, la constante que contendrá toda la información a utilizar, como la gran mayoría de plataformas, apis, etc
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error.message);
    } 

}


console.log(getWeatherByAsyncAwait());