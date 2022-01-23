window.addEventListener('load' , () => { // Escuchamos cuando se carga el documento

    // Creamos dos const una para buscar el display y la otra para buscar los botones, se guardan en un html collection
    const display = document.querySelector('.calculator-display'); 
    const keypadButton = document.getElementsByClassName('keypad-button');

    // Creamos otra const para convertir el HTMLCollection a Array 
    const keypadButtonArray = Array.from(keypadButton);

    // Iteramos por nuestro nuevo array de bottones 
    keypadButtonArray.forEach( (button) => {

        // A cada boton le agregamos un listener
        button.addEventListener('click', () => {
            calculadora(button, display);
        })
    })
});

function calculadora(button, display) {
    switch(button.innerHTML) {
        case "C":
            borrar(display);
            break;
        
        case "=":
            calcular(display);
            break;

        default:
            actualizar(display, button);
            break;
    }
}

function calcular(display) {
    display.innerHTML = eval(display.innerHTML) // Tomar el string y resolver y guardar en el HTML del display
}

function actualizar(display, button) {
    if (display.innerHTML == 0){
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML;
}

function borrar(display) {
    display.innerHTML = 0;
}