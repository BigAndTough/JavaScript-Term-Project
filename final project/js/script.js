document.addEventListener("DOMContentLoaded", function() {
    const howToPlayBtn = document.getElementById('howToPlayBtn');
    const howToPlayInfo = document.getElementById('howToPlayInfo');

    howToPlayBtn.addEventListener('click', () => {
        const isDisplayed = howToPlayInfo.style.display === 'none';
        howToPlayInfo.style.display = isDisplayed ? 'block' : 'none';
        // Toggle small-text class to change font size
        howToPlayInfo.classList.toggle('small-text', isDisplayed);
    });
});