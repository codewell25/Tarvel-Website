
//video play btn in about us page
const videoSection = document.querySelector('.about-us-video-section'),
    playBtn = document.querySelector('#video-play-btn'),
    closeBtn = document.querySelector('#video-closing-btn')

videoSection.style.display = 'none';

playBtn.addEventListener('click', () => {
    videoSection.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    videoSection.style.display = 'none';
})
