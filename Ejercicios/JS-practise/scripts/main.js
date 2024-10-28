function isEqual(str1, str2) {
    return str1 === str2;
} 

console.log(isEqual('hola', 'hola'));

function extraerSubcadena(string, start, end){
    return string.slice(start, end);
}

console.log(extraerSubcadena('El coche ferrari azúl'));

function dateFormat(userDate) {
    // construímos objeto fecha!!
    const date = new Date (userDate);
    console.log(date.getDate());

    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    return `${days[date.getDay()]}, ${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}`;

}

console.log(dateFormat('2024-02-14'));


//Cronómetro

class Crono {
    tiempoInicio = 0;
    tiempoFinal = 0;

    start() {
        this.tiempoInicio = Date.now();
    }

    reset() {
        this.tiempoInicio = 0;
        this.tiempoFinal = 0;
    }

    stop() {
        this.tiempoFinal = Date.now();
    }

    showTime(){
        return this.tiempoFinal - this.tiempoInicio;
    }

}

// Ejecútalo desde el console de la web
const crono = new Crono();
