const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('prev_button');
const rightBtn = document.getElementById('next_button');

const img = document.querySelectorAll('#imgs img');

let image_index = 0;
let interval = setInterval(run, 2000);

function run(){
    image_index++;
    changeImage();
}

function changeImage(){
    if(image_index > img.length - 1){
        image_index = 0;
    }
    else if( image_index < 0){
        image_index = img.length - 1;
    }

    imgs.style.transform = `translateX(${-image_index * 500}px)`
}

function resetInterval(){
    clearInterval(interval);
    interval = setInterval(run, 2000);
}

rightBtn.addEventListener('click', ()=>{
    image_index++;
    changeImage();
    resetInterval();
});

leftBtn.addEventListener('click', ()=>{
    image_index--;
    changeImage();
    resetInterval();
});