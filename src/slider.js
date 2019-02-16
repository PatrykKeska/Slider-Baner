const baner = document.querySelector('.baner')
const backgrounds = ["car-repair.jpg", "ford.jpg", "speed.jpg"];
const btnNext = document.querySelector('.next');
const btnPrevious = document.querySelector('.previous');

let i = 1;
let banersrc = baner.src = `/src/img/${backgrounds[i]}`

const changeBackground = () => {
    banersrc = baner.src = `/src/img/${backgrounds[i]}`
    i++;
    if (i >= backgrounds.length) {
        i = 0;
    }
}
let timer = 3000;
let index = setInterval(changeBackground, timer)


const nextSlide = () => {
    if (index) {
        clearInterval(index);
        banersrc = baner.src = `/src/img/${backgrounds[i]}`
        if (i < backgrounds.length) {
            i++
        }
        if (i >= backgrounds.length) {
            i = 0;
        }
    }
    index = setInterval(changeBackground, timer);
}

const previousSlide = () => {
    if (index) {
        clearInterval(index);
        banersrc = baner.src = `/src/img/${backgrounds[i]}`
        if (i > 0) {
            i--
        } else if (i === 0) {
            i = backgrounds.length - 1;
        }


    }
    index = setInterval(changeBackground, timer);
}


btnNext.addEventListener('click', nextSlide);
btnPrevious.addEventListener('click', previousSlide);