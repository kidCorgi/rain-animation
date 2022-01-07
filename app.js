const cloudEmoji = document.querySelector('.cloud');
const rainEmoji = document.querySelector('.rain');

cloudEmoji.addEventListener('click', () => {
    if(rainEmoji.classList.contains('rain')) {
        rainEmoji.classList.add('active');
        cloudEmoji.classList.remove('active');
    }
});

rainEmoji.addEventListener('click', () => {
    if (cloudEmoji.classList.contains('cloud')) {
        cloudEmoji.classList.add('active');
        rainEmoji.classList.remove('active');
    }
});