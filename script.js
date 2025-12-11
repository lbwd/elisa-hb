document.addEventListener('DOMContentLoaded', function () {
    const inputPage = document.getElementById('input-page');
    const secretPage = document.getElementById('secret-page');
    const secretInput = document.getElementById('secret-input');
    const submitBtn = document.getElementById('submit-btn');
    const errorMessage = document.getElementById('error-message');

    function checkSecret() {
        // Rimuove spazi e converte in minuscolo
        const userInput = secretInput.value.replace(/\s/g, '').toLowerCase();

        if (userInput === 'pontedeldiavolo' || userInput === 'ilpontedeldiavolo' || userInput === 'pdd') {
            // Mostra la pagina segreta
            inputPage.classList.add('hidden');
            secretPage.classList.remove('hidden');
        } else {
            // Mostra messaggio di errore
            errorMessage.classList.remove('hidden');
            secretInput.style.borderColor = '#ff4444';
            setTimeout(() => {
                secretInput.style.borderColor = '#ffb347';
            }, 1000);
        }
    }

    // Click sul pulsante
    submitBtn.addEventListener('click', checkSecret);

    // Pressione Enter nel campo di input
    secretInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            checkSecret();
        }
    });
});
