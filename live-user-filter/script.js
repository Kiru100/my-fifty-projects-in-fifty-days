const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];

getUserData();

filter.addEventListener('input', (e)=>filterData(e.target.value));

async function getUserData(){
    const res = await fetch ("https://randomuser.me/api?results=50")
    const { results }= await res.json();

    result.innerHTML = "";

    results.forEach(user => {
        const li = document.createElement('li');
        listItems.push(li);

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">    
            <div class="user-info">
                <h2>${user.name.first} ${user.name.last}</h2>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `;

        result.appendChild(li);
    });
}

function filterData(search_value){
    listItems.forEach(item=>{
        if(item.innerText.toLowerCase().includes(search_value.toLowerCase())){
            item.classList.remove("hide");
        }
        else{
            item.classList.add("hide");
        }
    })
}
