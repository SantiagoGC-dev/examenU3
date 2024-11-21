//Ejercicio 5

const euroADolar = 1.10;
const dolarAEuro = 0.91;


function convertirEurosDolares() {
    const cantidad = parseFloat(prompt("Introduce solo la cantidad que quieres convertir:"));
    const moneda = prompt("A que moneda quieres obtener la conversion? (dolares/euros)").toLowerCase();

    if (isNaN(cantidad) || cantidad <= 0) { //investigue el isNaN y es el "is not a number"
        console.log("Por favor, introduce una cantidad valida");
        return;
    }

    let conversion;
    if (moneda === "dolares") {
        conversion = cantidad * euroADolar;
        console.log(`${cantidad} euros son ${conversion.toFixed(2)} dolares.`); //el tofixed es pasar numero a string y en parametro lo limite a 2 decimales
    } else if (moneda === "euros") {
        conversion = cantidad * dolarAEuro;
        console.log(`${cantidad} dolares son ${conversion.toFixed(2)} euros.`);
    } else {
        console.log("Moneda no valida o utiliza 'dolares' o 'euros' ");
    }
}


convertirEurosDolares();

