document.addEventListener('DOMContentLoaded', function() {
    const inputPage = document.getElementById('input-page');
    const secretPage = document.getElementById('secret-page');
    const secretInput = document.getElementById('secret-input');
    const submitBtn = document.getElementById('submit-btn');

    function checkSecret() {
        // Rimuove spazi e converte in minuscolo
        const userInput = secretInput.value.replace(/\s/g, '').toLowerCase();
        
        if (userInput === 'pontedeldiavolo') {
            // Mostra la pagina segreta
            inputPage.classList.add('hidden');
            secretPage.classList.remove('hidden');
        } else {
            // Feedback per risposta errata (opzionale)
            secretInput.style.borderColor = '#ff4444';
            setTimeout(() => {
                secretInput.style.borderColor = '#ddd';
            }, 1000);
        }
    }

    // Click sul pulsante
    submitBtn.addEventListener('click', checkSecret);

    // Pressione Enter nel campo di input
    secretInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkSecret();
        }
    });
});
