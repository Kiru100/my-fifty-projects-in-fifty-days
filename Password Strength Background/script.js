const password_input = document.getElementById("password");
const background = document.getElementById("background");

password_input.addEventListener('input', onKeyUp);


function onKeyUp(event){
    const text_input = event.target.value;
    const length = text_input.length;
    const blur_value = 20 - length * 2;
    background.style.filter = `blur(${blur_value}px)`;
   
    
}