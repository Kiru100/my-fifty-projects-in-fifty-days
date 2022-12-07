const toggles = document.querySelectorAll('.toggle');
const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');

for(let i=0; i<toggles.length; i++){
    toggles[i].addEventListener('change', (event)=> doTheTrick(event.target));
}

function doTheTrick(clickedElement){
    if(good.checked && cheap.checked && fast.checked){
        if(good === clickedElement){
            fast.checked = false;
        }

        if(cheap === clickedElement){
            good.checked = false;
        }

        if(fast === clickedElement){
            cheap.checked = false;
        }
    }
}