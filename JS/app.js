//top-right drop down [lan section]
const btnTop = document.querySelector('#btn-top');
const dropDownContent = document.querySelector('.dropdown-content-top');

dropDownContent.style.display = 'none';

btnTop.addEventListener('click', () => {
    if (dropDownContent.style.display == 'none') {
        dropDownContent.style.display = 'block';
    }
    else {
        dropDownContent.style.display = 'none'
    }
})

//setting the box shadow to the navigation bar on scrolling
const navbar = document.querySelector('.nav-wrapper')


function getYPosition() {
    var top = window.pageYOffset || document.documentElement.scrollTop
    return top;
}


window.onscroll = function () {
    if (getYPosition() > 40) {
        navbar.style.boxShadow = "0 2px 28px 0 rgb(0 0 0 / 10%)";
    }
    else {
        navbar.style.boxShadow = "none";
    }
}


//for the section  that contains serach box
const searchBoxDiv = document.querySelector('.searchbox-div-wrapper')
const searchBoxCloseBtn = document.querySelector('#searchbox-div-close-btn')
const searchboxOpenBtn = document.querySelector('#search-icon')

searchBoxDiv.style.display = 'none'

searchboxOpenBtn.addEventListener('click', () => {
    searchBoxDiv.style.display = 'block'
    accountDetailsDiv.style.display = 'none';
})

searchBoxCloseBtn.addEventListener('click', () => {
    searchBoxDiv.style.display = 'none'
})

//for the section that contains account details
const userIconBtn = document.querySelector('#user-icon');
const accountDetailsDiv = document.querySelector('.acount-details')

accountDetailsDiv.style.display = 'none';

userIconBtn.addEventListener('click', () => {
    if (accountDetailsDiv.style.display == 'none') {
        accountDetailsDiv.style.display = 'block';

    }
    else {
        accountDetailsDiv.style.display = 'none';
    }
})

//aside nav bar


const plusIcon = document.querySelectorAll('.plus-icon');
const minusIcon = document.querySelectorAll('.minus-icon');

const sideNavSubMenu = document.querySelectorAll('.side-nav-sub-menu')

minusIcon.forEach((e) => {
    e.style.display = 'none';
})

//for home nav item
plusIcon[0].addEventListener('click', () => {

    plusIcon[0].style.display = 'none';
    minusIcon[0].style.display = 'inline-block'
    sideNavSubMenu[0].style.overflow = 'visible'
    sideNavSubMenu[0].style.height = '64px'

    //clodimg other sub mennus
    plusIcon[1].style.display = 'inline-block';
    minusIcon[1].style.display = 'none'
    sideNavSubMenu[1].style.overflow = 'hidden'
    sideNavSubMenu[1].style.height = '0px'

    plusIcon[2].style.display = 'inline-block';
    minusIcon[2].style.display = 'none'
    sideNavSubMenu[2].style.overflow = 'hidden'
    sideNavSubMenu[2].style.height = '0px'

    plusIcon[3].style.display = 'inline-block';
    minusIcon[3].style.display = 'none'
    sideNavSubMenu[3].style.overflow = 'hidden'
    sideNavSubMenu[3].style.height = '0px'

})

minusIcon[0].addEventListener('click', () => {
    plusIcon[0].style.display = 'inline-block';
    minusIcon[0].style.display = 'none'
    sideNavSubMenu[0].style.overflow = 'hidden'
    sideNavSubMenu[0].style.height = '0px'

})

//for package nav item
plusIcon[1].addEventListener('click', () => {

    plusIcon[1].style.display = 'none';
    minusIcon[1].style.display = 'inline-block'
    sideNavSubMenu[1].style.overflow = 'visible'
    sideNavSubMenu[1].style.height = '120px'

    //closing other sub menus
    plusIcon[0].style.display = 'inline-block';
    minusIcon[0].style.display = 'none'
    sideNavSubMenu[0].style.overflow = 'hidden'
    sideNavSubMenu[0].style.height = '0px'

    plusIcon[2].style.display = 'inline-block';
    minusIcon[2].style.display = 'none'
    sideNavSubMenu[2].style.overflow = 'hidden'
    sideNavSubMenu[2].style.height = '0px'

    plusIcon[3].style.display = 'inline-block';
    minusIcon[3].style.display = 'none'
    sideNavSubMenu[3].style.overflow = 'hidden'
    sideNavSubMenu[3].style.height = '0px'

})

minusIcon[1].addEventListener('click', () => {
    plusIcon[1].style.display = 'inline-block';
    minusIcon[1].style.display = 'none'
    sideNavSubMenu[1].style.overflow = 'hidden'
    sideNavSubMenu[1].style.height = '0px'



})

//for blog nav item
plusIcon[2].addEventListener('click', () => {

    plusIcon[2].style.display = 'none';
    minusIcon[2].style.display = 'inline-block'
    sideNavSubMenu[2].style.overflow = 'visible'
    sideNavSubMenu[2].style.height = '120px'


    //closing other sub menus
    plusIcon[0].style.display = 'inline-block';
    minusIcon[0].style.display = 'none'
    sideNavSubMenu[0].style.overflow = 'hidden'
    sideNavSubMenu[0].style.height = '0px'

    plusIcon[1].style.display = 'inline-block';
    minusIcon[1].style.display = 'none'
    sideNavSubMenu[1].style.overflow = 'hidden'
    sideNavSubMenu[1].style.height = '0px'


    plusIcon[3].style.display = 'inline-block';
    minusIcon[3].style.display = 'none'
    sideNavSubMenu[3].style.overflow = 'hidden'
    sideNavSubMenu[3].style.height = '0px'
})

minusIcon[2].addEventListener('click', () => {
    plusIcon[2].style.display = 'inline-block';
    minusIcon[2].style.display = 'none'
    sideNavSubMenu[2].style.overflow = 'hidden'
    sideNavSubMenu[2].style.height = '0px'

})

//for pages nav item
plusIcon[3].addEventListener('click', () => {

    plusIcon[3].style.display = 'none';
    minusIcon[3].style.display = 'inline-block'
    sideNavSubMenu[3].style.overflow = 'visible'
    sideNavSubMenu[3].style.height = '160px'

    //closing other sub mennus
    plusIcon[0].style.display = 'inline-block';
    minusIcon[0].style.display = 'none'
    sideNavSubMenu[0].style.overflow = 'hidden'
    sideNavSubMenu[0].style.height = '0px'

    plusIcon[1].style.display = 'inline-block';
    minusIcon[1].style.display = 'none'
    sideNavSubMenu[1].style.overflow = 'hidden'
    sideNavSubMenu[1].style.height = '0px'

    plusIcon[2].style.display = 'inline-block';
    minusIcon[2].style.display = 'none'
    sideNavSubMenu[2].style.overflow = 'hidden'
    sideNavSubMenu[2].style.height = '0px'
})

minusIcon[3].addEventListener('click', () => {
    plusIcon[3].style.display = 'inline-block';
    minusIcon[3].style.display = 'none'
    sideNavSubMenu[3].style.overflow = 'hidden'
    sideNavSubMenu[3].style.height = '0px'
})


// mob menu
const sideNavOpenBtn = document.querySelector(".ham-menu-open")
const sideNavCloseBtn = document.querySelector(".ham-menu-close")

const sideNavContent = document.querySelector(".nav-mob-wrapper")

sideNavCloseBtn.style.display = "none"

sideNavOpenBtn.addEventListener('click', () => {
    sideNavContent.style.marginLeft = "0px"
    sideNavCloseBtn.style.display = "inline-block"
    sideNavOpenBtn.style.display = "none"

})

sideNavCloseBtn.addEventListener('click', () => {
    sideNavContent.style.marginLeft = "-250px"
    sideNavCloseBtn.style.display = "none"
    sideNavOpenBtn.style.display = "inline-block"

})


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




