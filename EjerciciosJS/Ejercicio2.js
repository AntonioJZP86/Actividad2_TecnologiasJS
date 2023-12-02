// 2.	Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

function esMayor(event){
    event.preventDefault(); // Evita que se envíe el formulario

    // Obtener el valor del input
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    if(num1 > num2){
        console.log("El número " + num1 + " es mayor que el número " + num2);
        alert("El número " + num1 + " es mayor que el número " + num2);
        }else{
            console.log("El número " + num2 + " es mayor que el número " + num1);
            alert("El número " + num2 + " es mayor que el número " + num1);
    }

}