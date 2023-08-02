const ratings = document.querySelectorAll(".rating")
const ratings_container = document.querySelector(".ratings-container")
const sendBtn = document.querySelector("#send")
const panel = document.querySelector("#panel")

let selected_rating = "Satisfied";


ratings_container.addEventListener("click",(event)=>{
    let click_element = event.target;

    if(click_element.parentNode.classList.contains("rating")){
        removeActive();
        click_element.parentNode.classList.add("active");
        selected_rating = click_element.nextElementSibling.innerHTML;
    }

});

sendBtn.addEventListener("click", (e) =>{
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank you!</strong>
        <br>
        <strong>Feedback: ${selected_rating}</strong>
        <br>
        <p>We'll use your feedback to improve our customer support.
    `
});

function removeActive(){
    for(let i = 0; i < ratings.length; i++){
        ratings[i].classList.remove("active");
    }
}





