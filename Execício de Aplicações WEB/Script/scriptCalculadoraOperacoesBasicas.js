let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        if (display.value.includes("/0")) {
            display.value = "Erro: Divisão por 0";
        } else {
            display.value = eval(display.value);
        }
    } catch (error) {
        display.value = 'Erro';
    }
}
