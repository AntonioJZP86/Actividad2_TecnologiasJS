// Detectar si la cadena de entrada en un palíndormo.

function esPalindromo(event) {
    event.preventDefault(); // Evita que se envíe el formulario

    // Obtener el valor del input
    var cadena = document.getElementById("palindromo").value;

    // Convertir la cadena a minúsculas y eliminar espacios y caracteres especiales
    var cadenaOriginal = cadena.toLowerCase().replace(/[\W_]/g, '');

    // Invertir la cadena
    var cadenaInvertida = cadenaOriginal.split("").reverse().join("");

    if(cadenaOriginal === cadenaInvertida) {
        console.log("La cadena \"" + cadena + "\" es un palíndromo");
        alert("La cadena \"" + cadena + "\" es un palíndromo");
    } else {
        console.log("La cadena \"" + cadena + "\" no es un palíndromo");
        alert("La cadena \"" + cadena + "\" no es un palíndromo");
    }
}



