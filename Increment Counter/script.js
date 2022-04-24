const counter = document.querySelectorAll('.counter')

counter.forEach(counter =>{
    counter.innerText='0'

    const updateCounter = () => {
        const target = +counter.getAttribute('value')
        const c = +counter.innerText
        console.log(c)
        const increment = target/200   

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