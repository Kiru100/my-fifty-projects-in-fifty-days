const APIURL = 'https://api.github.com/users/'
const form = document.getElementById('form')
const searchValue = document.getElementById('search')
const main = document.getElementById('main')

async function getUser(username){
    try{
       const { data } = await axios(APIURL + username)
       createUserCard(data) 
       getRepos(username)

    }catch(err){

        console.log(err.response.status)
        if(err.response.status === 404){

            createErrorCard('No profile with this username')
        }
    }
}

function createUserCard(user){
    const cardHTML = `
    <div class="card">
    <div>
      <img src="${user.avatar_url}" alt="${user.name}" class="avatar">

    </div>
    <div class="user-info">
      <h2>${user.name}</h2>
      <p>L${user.bio}.</p>
      <ul>
        <li>${user.followers} <strong>Followers</strong> </li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>

      <div id="repos">
      
      </div>

    </div>
  </div>`
  main.innerHTML = cardHTML;
}


function createErrorCard(message){
    const cardHTML = `
    <div class="card">
        <h1>${message}</h1>
    </div>
    `
    main.innerHTML = cardHTML;
}

function addRepostoCard(repos){
  const  reposEl = document.getElementById('repos');
  repos
    .slice(0,10)
    .forEach(repo =>{
    const repoEl = document.createElement('a')

    repoEl.classList.add('repo')
    repoEl.href = repo.html_url
    repoEl.target = '_blank'
    repoEl.innerText = repo.name

    reposEl.appendChild(repoEl)
  })
}

async function getRepos(username){
  try{
    const { data } = await axios(APIURL + username + '/repos?sort=created');
    addRepostoCard(data);
  }catch(err){
         createErrorCard('Problem fetching repos')
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




