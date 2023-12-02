// 3.	Escribe un programa que pida una frase y escriba las vocales que aparecen.

function contadorVocales(event){
    event.preventDefault(); // Evita que se envíe el formulario

    // Obtener una frase
    var frase = document.getElementById("frase").value;

    // Convertir la frase a minúsculas
    frase = frase.toLowerCase();

    // Contador de vocales
    var contador = 0;

    // Recorrer la frase
    for(var i = 0; i < frase.length; i++){

        // Comprobar si la letra es una vocal
        if(frase[i] == "a" || frase[i] == "e" || frase[i] == "i" || frase[i] == "o" || frase[i] == "u"){
            contador++;
        }
    }
    console.log(("La frase \" + frase + \" tiene \" + contador + \" vocales"));
    alert("La frase \"" + frase + "\" tiene " + contador + " vocales");
}