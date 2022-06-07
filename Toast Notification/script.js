const showNotif = document.getElementById('button') 
const toasts = document.getElementById('toasts')


const toastMessage = ['Pang una', 'Pangalawa', 'Pangatlo', 'Pang apat', 'Pang Lima'] 

showNotif.addEventListener('click', ()=>labasnotif())


function labasnotif (){
    const notif = document.createElement('div')
    notif.classList.add('toast')

    notif.innerText=getRandomNumber();

    toasts.appendChild(notif)

    setTimeout(()=>{
        notif.remove()
    }, 3000)
  
}

function getRandomNumber(){
    return toastMessage[Math.floor(Math.random() * toastMessage.length)]
}