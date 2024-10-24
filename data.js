  // Recuperar el dato guardado en localStorage
const datoIngresado = localStorage.getItem('valorIngresado');

if (datoIngresado) {
    // Mostrar el dato en la página
    document.getElementById('data').innerText = datoIngresado;
} else {
    // Mostrar mensaje alternativo si no hay dato
    document.getElementById('data').innerText = 'No hay texto guardado';
}
