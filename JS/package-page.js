
//reading the price range and displaying

let priceRange = document.querySelector('#price-range'),
    priceDisplay = document.querySelector('#price-display')

priceDisplay.innerHTML = `$${priceRange.value}`
priceRange.addEventListener('input', () => {
    priceDisplay.innerHTML = `$${priceRange.value}`

})

//for radio btns of duration
let radiobtn1 = document.querySelector('#duration-1'),
    radiobtn2 = document.querySelector('#duration-2'),
    radiobtn3 = document.querySelector('#duration-3'),
    radiobtn4 = document.querySelector('#duration-4'),
    radiobtn5 = document.querySelector('#duration-5'),
    radiobtn6 = document.querySelector('#duration-6');

//on selecting one  option, other are deselct automatically
radiobtn1.addEventListener('click', () => {
    radiobtn2.checked = false
    radiobtn3.checked = false
    radiobtn4.checked = false
    radiobtn5.checked = false
    radiobtn6.checked = false
})

radiobtn2.addEventListener('click', () => {
    radiobtn1.checked = false
    radiobtn3.checked = false
    radiobtn4.checked = false
    radiobtn5.checked = false
    radiobtn6.checked = false
})

radiobtn3.addEventListener('click', () => {
    radiobtn1.checked = false
    radiobtn2.checked = false
    radiobtn4.checked = false
    radiobtn5.checked = false
    radiobtn6.checked = false
})

radiobtn4.addEventListener('click', () => {
    radiobtn1.checked = false
    radiobtn2.checked = false
    radiobtn3.checked = false
    radiobtn5.checked = false
    radiobtn6.checked = false
})

radiobtn5.addEventListener('click', () => {
    radiobtn1.checked = false
    radiobtn2.checked = false
    radiobtn3.checked = false
    radiobtn4.checked = false
    radiobtn6.checked = false
})

radiobtn6.addEventListener('click', () => {
    radiobtn5.checked = false
    radiobtn2.checked = false
    radiobtn3.checked = false
    radiobtn4.checked = false
    radiobtn5.checked = false
})


//for radio btns of duration
let catRadiobtn1 = document.querySelector('#category-1'),
    catRadiobtn2 = document.querySelector('#category-2'),
    catRadiobtn3 = document.querySelector('#category-3'),
    catRadiobtn4 = document.querySelector('#category-4'),
    catRadiobtn5 = document.querySelector('#category-5');

//on selecting one  option, other are deselct automatically
catRadiobtn1.addEventListener('click', () => {
    catRadiobtn2.checked = false
    catRadiobtn3.checked = false
    catRadiobtn4.checked = false
    catRadiobtn5.checked = false

})

catRadiobtn2.addEventListener('click', () => {
    catRadiobtn1.checked = false
    catRadiobtn3.checked = false
    catRadiobtn4.checked = false
    catRadiobtn5.checked = false

})

catRadiobtn3.addEventListener('click', () => {
    catRadiobtn1.checked = false
    catRadiobtn2.checked = false
    catRadiobtn4.checked = false
    catRadiobtn5.checked = false

})

catRadiobtn4.addEventListener('click', () => {
    catRadiobtn1.checked = false
    catRadiobtn2.checked = false
    catRadiobtn3.checked = false
    catRadiobtn5.checked = false

})

catRadiobtn5.addEventListener('click', () => {
    catRadiobtn1.checked = false
    catRadiobtn2.checked = false
    catRadiobtn3.checked = false
    catRadiobtn4.checked = false
})
