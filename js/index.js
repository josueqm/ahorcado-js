// Elementos del DOM

// Obtengo el boton de index.html
document.getElementById('btnPlay').addEventListener('click', function(event) {
    // Prevenir la accion predetermiada del enlace
    event.preventDefault();

    // Obtener el valor del input User Name
    let inputValue = document.getElementById('userName').value;
    // Almacenar elm valor en localStorage
    localStorage.setItem('userName', inputValue);

    // Redirigir a game.html
    window.location.href = './game.html';
});

