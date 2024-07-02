// script.js
document.addEventListener('DOMContentLoaded', function () {
    const text = 'Welcome  GKI Ottow Geissler Sumberker ';
    let index = 0;
    const typingText = document.getElementById('typing-text');

    function type() {
        if (index < text.length) {
            typingText.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 150);
        }
    }

    type();
});
