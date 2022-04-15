const jokeElement = document.getElementById('joke')
const jokeButton = document.getElementById('jokeBtn')

generateJoke()

// using async/await
async function generateJoke(){
    const configuration = {
        headers:{
            'Accept':'application/json'
        }
    }

   const response = await fetch('https://icanhazdadjoke.com/', configuration)
   const data = await response.json()
   jokeElement.innerHTML = data.joke

}

// without async await (using.then)
// function generateJoke(){
//     const configuration = {
//         headers:{
//             'Accept':'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com/', configuration)
//     .then((ito) => ito.json())
//     .then((data)=> {
//         jokeElement.innerHTML = data.joke
//     })
// }

jokeButton.addEventListener('click',generateJoke)