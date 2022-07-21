// Selecting divisions 
const infoSec = document.querySelector('#pd-information')
const travelPlanSec = document.querySelector('#travel-plan')
const gallerySec = document.querySelector('#pd-gallery')

// selectiong btns
const btns = document.querySelectorAll('.pd-btns')

travelPlanSec.style.display = 'none';
gallerySec.style.display = 'none';



btns[0].addEventListener('click', () => {
    infoSec.style.display = 'block';
    travelPlanSec.style.display = 'none';
    gallerySec.style.display = 'none';

    //adding bg to btns
    btns[0].classList.add('active-btn')
    btns[1].classList.remove('active-btn')
    btns[2].classList.remove('active-btn')
})

btns[1].addEventListener('click', () => {
    infoSec.style.display = 'none';
    travelPlanSec.style.display = 'block';
    gallerySec.style.display = 'none';

    //adding bg to btns
    btns[0].classList.remove('active-btn')
    btns[1].classList.add('active-btn')
    btns[2].classList.remove('active-btn')


})

btns[2].addEventListener('click', () => {
    infoSec.style.display = 'none';
    travelPlanSec.style.display = 'none';
    gallerySec.style.display = 'block';

    //adding bg to btns
    btns[0].classList.remove('active-btn')
    btns[1].classList.remove('active-btn')
    btns[2].classList.add('active-btn')

})

//selecting gallery images
const pdImages = document.querySelectorAll('.pd-gallary-img')

//selecting anchor tag and img tag
const imgDownload = document.querySelector('#popup-img-download')
const popImg = document.querySelector('#popup-img')

//selecting closing btn
const closeBtn = document.querySelector('.popup-close-btn')

//selecting pop-up-div
const popubDiv = document.querySelector('.pd-popup-img')


popubDiv.style.display = 'none'

//adding eventlistiner
pdImages.forEach((img) => {

    img.addEventListener('click', () => {
        popubDiv.style.display = 'block'
        popImg.setAttribute("src", img.src)
        imgDownload.href = img.src
        console.log(imgDownload);
    })

})

closeBtn.addEventListener('click', () => {
    popubDiv.style.display = 'none'

})
