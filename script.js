
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.custom-button');
    if (button) {
        button.addEventListener('click', function() {
            alert('Button clicked!');
        });
    }
});
