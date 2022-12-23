const boxesContainer = document.getElementById('boxes');
const btn = document.getElementById('magic');

btn.addEventListener('click', ()=>boxesContainer.classList.toggle('big'))

function createBoxes(){
    for(let index = 0; index<4; index++){
        for(let index2 = 0; index2 < 4; index2++){
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.backgroundPosition = `${-index2 * 125}px ${-index * 125}px`;
            boxesContainer.appendChild(box);
            console.log(box);
        }
    }
}

createBoxes();