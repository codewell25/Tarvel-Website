//making accordion

//for 1st question
let questionAns1 = document.querySelector('.question-ans-1')
let arrowFirst = document.querySelector('.faq-arrow-first')

//selection eleemtn for other questions
let questionHeading = document.querySelectorAll('.question-heading'),
    questionAns = document.querySelectorAll('.question-ans'),
    arrows = document.querySelectorAll('.faq-arrow')

let accordionDisplay1 = true,
    accordionDisplay = false;


//adding event listiner for question-1
questionHeading[0].addEventListener('click', () => {

    if (accordionDisplay1) {
        questionAns1.style.height = '0px';
        questionAns1.style.overflow = 'hidden';
        questionAns1.style.padding = '0px 25px'
        questionAns1.style.border = 'none'
        arrowFirst.style.transform = 'rotate(-180deg)'
        accordionDisplay1 = false;
    }
    else {
        questionAns1.style.padding = '25px';
        questionAns1.style.height = '228px';
        questionAns1.style.overflow = 'visible';
        questionAns1.style.border = '1px solid rgba(0, 0, 0, 0.2)';
        arrowFirst.style.transform = 'rotate(0deg)'
        accordionDisplay1 = true;

    }

})

//adding event listener for general questions
questionHeading[1].addEventListener('click', () => {

    closingAccordion(questionAns1, arrowFirst);
    closingAccordion(questionAns[1], arrows[1]);
    closingAccordion(questionAns[2], arrows[2]);




    accordion(questionAns[0], arrows[0]);


})

questionHeading[2].addEventListener('click', () => {
    closingAccordion(questionAns1, arrowFirst);
    closingAccordion(questionAns[0], arrows[0]);
    closingAccordion(questionAns[2], arrows[2]);


    accordion(questionAns[1], arrows[1]);

})

questionHeading[3].addEventListener('click', () => {
    closingAccordion(questionAns1, arrowFirst);
    closingAccordion(questionAns[0], arrows[0]);
    closingAccordion(questionAns[1], arrows[1]);


    accordion(questionAns[2], arrows[2]);

})

//adding event listener for other questions


questionHeading[4].addEventListener('click', () => {

    closingAccordion(questionAns[4], arrows[4]);
    closingAccordion(questionAns[5], arrows[5]);


    accordion(questionAns[3], arrows[3]);

})


questionHeading[5].addEventListener('click', () => {

    closingAccordion(questionAns[3], arrows[3]);
    closingAccordion(questionAns[5], arrows[5]);


    accordion(questionAns[4], arrows[4]);

})


questionHeading[6].addEventListener('click', () => {

    closingAccordion(questionAns[3], arrows[3]);
    closingAccordion(questionAns[4], arrows[4]);


    accordion(questionAns[5], arrows[5]);

})


//adding event listener for other questions
questionHeading[7].addEventListener('click', () => {

    closingAccordion(questionAns[7], arrows[7]);
    closingAccordion(questionAns[8], arrows[8]);


    accordion(questionAns[6], arrows[6]);

})


questionHeading[8].addEventListener('click', () => {
    closingAccordion(questionAns[6], arrows[6]);
    closingAccordion(questionAns[8], arrows[8]);


    accordion(questionAns[7], arrows[7]);

})


questionHeading[9].addEventListener('click', () => {
    closingAccordion(questionAns[6], arrows[6]);
    closingAccordion(questionAns[7], arrows[7]);


    accordion(questionAns[8], arrows[8]);

})

//this function changes the content dynamically
function accordion(accordionContent, arrow) {
    if (accordionDisplay) {
        accordionContent.style.height = '0px';
        accordionContent.style.overflow = 'hidden';
        accordionContent.style.padding = '0px 25px'
        accordionContent.style.border = 'none'
        arrow.style.transform = 'rotate(-180deg)'
        accordionDisplay = false;
    }
    else {
        accordionContent.style.padding = '25px';
        accordionContent.style.height = '228px';
        accordionContent.style.overflow = 'visible';
        accordionContent.style.border = '1px solid rgba(0, 0, 0, 0.2)';
        arrow.style.transform = 'rotate(0deg)'
        accordionDisplay = true;

    }
}

//On calling this function, other accordion content closes
function closingAccordion(accordionContent, arrow) {
    accordionContent.style.height = '0px';
    accordionContent.style.overflow = 'hidden';
    accordionContent.style.padding = '0px 25px'
    accordionContent.style.border = 'none'
    arrow.style.transform = 'rotate(-180deg)'
}
