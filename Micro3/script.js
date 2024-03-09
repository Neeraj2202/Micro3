document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.querySelector('.input');
    const buttons = document.querySelectorAll('.button');
    const resetButton = document.querySelector('.RESET');
    const equalButton = document.querySelector('.EQUAL');
    const delButton = document.querySelector('.DEL');

    // Add event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            inputField.value += button.textContent;
        });
    });

    // Reset button functionality
    resetButton.addEventListener('click', () => {
        inputField.value = '';
    });

    // Delete last character functionality
    delButton.addEventListener('click', () => {
        inputField.value = inputField.value.slice(0, -1);
    });

    // Equal button functionality
    equalButton.addEventListener('click', () => {
        try {
            const result = eval(inputField.value);
            inputField.value = result;
        } catch (error) {
            inputField.value = 'Error';
        }
    });
});
