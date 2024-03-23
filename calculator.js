function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    const allowedKeys = /[0-9/*\-+.()=]|Enter|Backspace|Delete|Escape/;
    if (allowedKeys.test(key)) {
        if (key === 'Enter' || key === '=') {
            calculate();
        } else if (key === 'Backspace' || key === 'Delete') {
            clearDisplay();
        } else if (key === 'Escape') {
            document.getElementById('display').value = '';
        } else {
            appendToDisplay(key);
        }
    }
});

