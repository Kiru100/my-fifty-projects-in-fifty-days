const APIURL = 'https://api.github.com/users/'
const form = document.getElementById('form')
const searchValue = document.getElementById('search')

async function getUser(username){
    try{
       const { data } = await axios(APIURL + username)
       console.log(data) 
    }catch(err){
        console.log(err)     
    }
}

form.addEventListener('submit', (event) =>{
    event.preventDefault()

    const user = searchValue.value

    if(user){
        getUser(user)
        searchValue.value = ''

    }

})



