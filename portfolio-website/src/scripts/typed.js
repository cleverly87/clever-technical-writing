document.addEventListener('DOMContentLoaded', function() {
    const typedText = document.querySelector('.typed-text');
    const phrases = ['API Technical Writer', 'Developer Advocate', 'Documentation Specialist'];
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    function type() {
        const currentPhrase = phrases[currentPhraseIndex];
        if (isDeleting) {
            typedText.textContent = currentPhrase.substring(0, currentCharIndex - 1);
            currentCharIndex--;
            if (currentCharIndex === 0) {
                isDeleting = false;
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            }
        } else {
            typedText.textContent = currentPhrase.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            if (currentCharIndex === currentPhrase.length) {
                isDeleting = true;
            }
        }
        setTimeout(type, isDeleting ? 100 : 200);
    }

    type();
});