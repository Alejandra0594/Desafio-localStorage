document.getElementById('buttonText').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;

    // Guarda el valor del input en localStorage
    localStorage.setItem('valorIngresado', inputText);
});



