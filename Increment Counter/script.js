const counter = document.querySelectorAll('.counter')

counter.forEach(counter =>{
    counter.innerText='0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c= +counter.innerText
        
        const increment = target/200
        
        console.log(increment)

        if(c < target){
            counter.innerHTML = `${Math.ceil(c + increment)}`
            setTimeout(() => {
               updateCounter() 
            }, 1);
        }else{
            counter.innerHTML = target
        }
    }

    updateCounter()
})