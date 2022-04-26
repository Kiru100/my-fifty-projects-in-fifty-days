const smallCups = document.querySelectorAll('.cup-small')

const liters = document.getElementById('liters');
const percentage= document.getElementById('percentage');
const remained = document.getElementById('remained');

smallCups.forEach((cup, idx)=>{
    cup.addEventListener('click',() => highlightCups(idx))

})

function highlightCups(index){
    if(smallCups[index].classList.contains('full') && !smallCups
    [index].nextElementSibling.classList.contains('full')){
        index--;
    }

    smallCups.forEach((cup,idx2)=> {
        if(idx2 <= index){
            cup.classList.add('full')
        }else{
            cup.classList.remove('full')
        }

    })

    
}