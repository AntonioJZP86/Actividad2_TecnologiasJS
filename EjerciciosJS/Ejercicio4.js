//4.	Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales.

function contadorIndividualVocales(event){
    event.preventDefault(); // Evita que se envíe el formulario

    // Obtener una frase
    var frase = document.getElementById("frase2").value;

    // Convertir la frase a minúsculas
    frase = frase.toLowerCase();

    // Contador de vocales
    var contadorA = 0;
    var contadorE = 0;
    var contadorI = 0;
    var contadorO = 0;
    var contadorU = 0;

    // Recorrer la frase
    for(var i = 0; i < frase.length; i++){

        // Comprobar si la letra es una vocal
        if(frase[i] === "a"){
            contadorA++;
        }else if(frase[i] === "e"){
            contadorE++;
        }else if(frase[i] === "i"){
            contadorI++;
        }else if(frase[i] === "o"){
            contadorO++;
        }else if(frase[i] === "u"){
            contadorU++;
        }
    }

    console.log(("La frase \" + frase + \" tiene \" + contador + \" vocales"));
    alert("La frase \"" + frase + "\" tiene " + contadorA + " vocales A");
    alert("La frase \"" + frase + "\" tiene " + contadorE + " vocales E");
    alert("La frase \"" + frase + "\" tiene " + contadorI + " vocales I");
    alert("La frase \"" + frase + "\" tiene " + contadorO + " vocales O");
    alert("La frase \"" + frase + "\" tiene " + contadorU + " vocales U");
}