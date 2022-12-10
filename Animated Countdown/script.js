const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const final_message = document.querySelector('.final');
const replay = document.querySelector('#replay');

runAnimation();

function resetDom(){
    counter.classList.remove('hide');
    final_message.classList.remove('show');

    nums.forEach((num)=>{
        num.classList.value = '';
    });

    nums[0].classList.add('in');
}

function runAnimation(){
    nums.forEach((num, index) => {
        const nextToLast = nums.length - 1;

        num.addEventListener('animationend', (e)=>{
            if(e.animationName === 'inside' && index !== nextToLast){
                num.classList.remove('in');
                num.classList.add('out');
            }
            else if(e.animationName === 'outside' && num.nextElementSibling){
                num.nextElementSibling.classList.add('in');
            }
            else{
                counter.classList.add('hide');
                final_message.classList.add('show');
            }
        });
    });
}

replay.addEventListener('click', ()=>{
    resetDom();
    runAnimation();
});
