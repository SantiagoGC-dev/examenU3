//Ejercicio 6

function convertirCelsiusFahrenheit() {
    const celsius = parseFloat(prompt("Introduce la temperatura en grados CELSIUS:"));

    if (isNaN(celsius)) { //isNaN es el "is Not a Number" sirve pa verificar si el numero lo que esta agrgando el usuario
        console.log("Por favor, introduce un numero valido");
        return;
    }

    const fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius} grados Celsius son ${fahrenheit.toFixed(2)} grados Fahrenheit.`);
}


convertirCelsiusFahrenheit();

