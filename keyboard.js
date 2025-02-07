// keyboard.js

document.addEventListener('DOMContentLoaded', function() {
    // Get all the keys and the text display area
    const keys = document.querySelectorAll('.key-row');
    const textArea = document.querySelector('.text');

    // Event listener for each key
    keys.forEach(key => {
        key.addEventListener('click', () => {
            const keyValue = key.innerText;

            if (keyValue === 'Delete') {
                // If Delete key is pressed, remove the last character from the text area
                textArea.innerText = textArea.innerText.slice(0, -1);
            } else if (keyValue === 'Spacebar') {
                // If Spacebar is pressed, add a space to the text area
                textArea.innerText += ' ';
            } else {
                // Add the pressed key value to the text area
                textArea.innerText += keyValue;
            }
        });
    });

    // Ensure the spacebar is handled
    document.querySelector('.spacebar').addEventListener('click', () => {
        textArea.innerText += ' ';
    });
});
