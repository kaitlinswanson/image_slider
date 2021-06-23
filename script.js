
const carousel = document.querySelector('.images');
const images = document.querySelectorAll('.images img');

// select buttons 
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
//make change image function that puts images in an array 

let counter = 1;
const size = images[0].clientWidth;
carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';

//automatically moves fwd every 5 seconds 
setInterval (function() {
    moveNext();
}, 5000);


//button functions. add 1 to the counter when next button is clicked
nextButton.addEventListener('click', () => {
    moveNext();
});

prevButton.addEventListener('click', () => {
    movePrev();
});

function moveNext() {
    if (counter >= images.length-1) return;
    carousel.style.transition = "transform 0.4s ease-in-out"; 
    counter++;
    carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
};

function movePrev() {
    if (counter <= 0) return;
    carousel.style.transition = "transform 0.4s ease-in-out"; 
    counter--;
    carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
};


carousel.addEventListener('transitionend', () => {

    if (images[counter].id === 'lastClone') {
    carousel.style.transition = "none";
    counter = images.length - 2;
    carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if (images[counter].id === 'firstClone') {
        carousel.style.transition = "none";
        counter = images.length - counter;
        carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

//navigation circles at the bottom that can be clicked
const selectorOne = document.getElementById('selector1'); 
const selectorTwo = document.getElementById('selector2'); 
const selectorThree = document.getElementById('selector3'); 

selectorOne.addEventListener('click', () => {
    counter = 1; 
    carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

selectorTwo.addEventListener('click', () => {
    counter = 2; 
    carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

selectorThree.addEventListener('click', () => {
    counter = 3; 
    carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
