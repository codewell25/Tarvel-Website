//seting value of current date to the input date field
const dateInputEl = document.querySelector('#date-inputEl');

const date = new Date()

let day, month;

if (date.getDate() < 10) {
    day = "0" + date.getDate()
}
else {
    day = date.getDate()
}

if (date.getMonth() + 1 < 10) {
    month = "0" + (date.getMonth() + 1)
}
else {
    month = date.getMonth()
}

dateInputEl.value = `${day}/${month}/${date.getFullYear()} `


//search filter section dropdown
const travelPlaceBtn = document.querySelector('#travel-place-btn')
const travelOptions = document.querySelector('.travel-options')

travelOptions.style.display = 'none'

travelPlaceBtn.addEventListener('click', () => {
    if (travelOptions.style.display == 'none') {
        travelOptions.style.display = 'block'
    }
    else {
        travelOptions.style.display = 'none'
    }
})



