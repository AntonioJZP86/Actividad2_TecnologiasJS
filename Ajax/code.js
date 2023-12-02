// Función que se ejecuta cuando se carga la página.
window.onload = function() {
    // Ejercicio 1: Establecer la URL actual en el cuadro de texto al cargar la página.
    document.getElementById('recurso').value = document.location.href;

    // Manejar el clic en el botón 'enviar'.
    document.getElementById('enviar').onclick = function() {
        // Crear un nuevo objeto XMLHttpRequest.
        var xhr = new XMLHttpRequest();
        // Obtener la URL del cuadro de texto.
        var url = document.getElementById('recurso').value;

        // Función que se llama cada vez que cambia el estado de la petición XMLHttpRequest.
        xhr.onreadystatechange = function() {
            // Ejercicio 3: Mostrar el estado actual de la petición.
            var stateDescription = getStateDescription(xhr.readyState);
            document.getElementById('estados').textContent = 'Estado de la petición: ' + stateDescription;

            // Verificar si la petición ha sido completada.
            if(xhr.readyState === 4 ) {
                // Ejercicio 2: Mostrar el contenido de la respuesta.
                document.getElementById('contenidos').textContent = xhr.responseText;
                // Ejercicio 4: Mostrar las cabeceras HTTP de la respuesta del servidor.
                document.getElementById('cabeceras').textContent = xhr.getAllResponseHeaders();
                // Ejercicio 5: Mostrar el código y el texto de estado de la respuesta.
                document.getElementById('codigo').textContent = 'Código de estado: ' + xhr.status + ' ' + xhr.statusText;
            }
        };

        // Configurar la petición como una petición GET a la URL especificada.
        xhr.open('GET', url, true);
        // Enviar la petición.
        xhr.send();
    };
};

// Función para obtener la descripción textual del estado de la petición AJAX.
function getStateDescription(readyState) {
    switch (readyState) {
        case 0: return 'NO INICIADA'; // La petición no se ha iniciado.
        case 1: return 'ABIERTA'; // La conexión con el servidor está abierta.
        case 2: return 'CABECERAS RECIBIDAS'; // Las cabeceras de la respuesta han sido recibidas.
        case 3: return 'CARGANDO'; // La petición está siendo procesada.
        case 4: return 'COMPLETADA'; // La petición ha sido completada.
        default: return 'DESCONOCIDO'; // Estado desconocido.
    }
}
