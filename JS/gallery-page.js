
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