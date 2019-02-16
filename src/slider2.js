const photo1 = document.querySelector('.photo1');
const photo2 = document.querySelector('.photo2');
const photo3 = document.querySelector('.photo3');

const btnPrevious2 = document.querySelector('.previous2')
const btnNext2 = document.querySelector('.next2')

let photos = [photo1, photo2, photo3];
activePhoto = 0;


const intervalSlider = () => {
    if (activePhoto < (photos.length)) {
        activePhoto++
    }
    if (activePhoto >= photos.length) {
        activePhoto = 0
    }
    const indexRemove = photos.findIndex(photo => photo.classList.contains('opacityOn'));
    photos[indexRemove].classList.remove('opacityOn');
    photos[activePhoto].classList.add('opacityOn');
}


let indexInterval2 = setInterval(intervalSlider, timer);



const previous2Slide = () => {
    clearInterval(indexInterval2)
    if (activePhoto >= 0) {
        activePhoto--
    }
    if (activePhoto < 0) {
        activePhoto = photos.length - 1;
    }
    const indexRemove = photos.findIndex(photo => photo.classList.contains('opacityOn'))
    photos[indexRemove].classList.remove('opacityOn');
    photos[activePhoto].classList.add('opacityOn');
    indexInterval2 = setInterval(intervalSlider, timer);
}


const next2Slide = () => {
    clearInterval(indexInterval2)
    if (activePhoto < (photos.length)) {
        activePhoto++
    }
    if (activePhoto >= photos.length) {
        activePhoto = 0
    }
    const indexRemove = photos.findIndex(photo => photo.classList.contains('opacityOn'));
    photos[indexRemove].classList.remove('opacityOn');
    photos[activePhoto].classList.add('opacityOn');
    indexInterval2 = setInterval(intervalSlider, timer);

}


btnPrevious2.addEventListener('click', previous2Slide)
btnNext2.addEventListener('click', next2Slide)