const images = document.querySelectorAll('.content');
const buttons = document.querySelectorAll('ul li');


for(let index = 0; index < buttons.length; index++){
    buttons[index].addEventListener('click', (event)=>{clickedMenu(index, buttons[index])});
}


const clickedMenu = (index) =>{
    for(let index=0; index<buttons.length; index++){
        buttons[index].classList.remove('active');
        images[index].classList.remove('show');
    }
    buttons[index].classList.add('active');
    images[index].classList.add('show');
}