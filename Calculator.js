function appendValue(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function backspace() {
    var displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.substring(0, displayValue.length - 1);
}
