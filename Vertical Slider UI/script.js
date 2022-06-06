const sliderContainer = document.querySelector('.slider-container')
const rightSlide = document.querySelector('.right-slide')
const leftSlide = document.querySelector('.left-slide')
const btnUp = document.querySelector('.up-button')
const btnDown = document.querySelector('.down-button')
const slideLength = rightSlide.querySelectorAll('div').length;

let activeSlideIndex=0;

leftSlide.style.top = `-${(slideLength -1 )*100}vh`;

btnUp.addEventListener('click', ()=> changeSlide('up'))
btnDown.addEventListener('click', ()=> changeSlide('down'))

const changeSlide = (bastaganun) => {
    const clientScreenHeight = sliderContainer.clientHeight;
    console.log(clientScreenHeight)
    if(bastaganun === 'up'){
        activeSlideIndex++;
        if(activeSlideIndex > slideLength -1){
            activeSlideIndex=0
        }
    }else if(bastaganun === 'down'){
        activeSlideIndex--;
        if(activeSlideIndex < 0 ){
            activeSlideIndex=slideLength -1;
        }
    }

    
    rightSlide.style.transform = `translateY(-${activeSlideIndex * clientScreenHeight}px)`
    leftSlide.style.transform = `translateY(${activeSlideIndex * clientScreenHeight}px)`
}