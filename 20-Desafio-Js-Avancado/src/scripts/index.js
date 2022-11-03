let infoRepo
document.getElementById('btn-search').addEventListener('click', ()=>{
    const username = document.getElementById('input-search').value
    getUserProfile(username)

})

// funcao utilizada para pesquisar pela tecla enter
document.getElementById('input-search').addEventListener('keyup', (e)=>{
    const username = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyProssed = key === 13

    if(isEnterKeyProssed){
        getUserProfile(username)
    }

})

//solicitar APi do gitHub juntamente com o usuario
async function user(username){
    const response = await fetch(`https://api.github.com/users/${username}`);
    return await response.json()
}

//solicitar APi do gitHub juntamente com o repositorio de usuario
async function repos(username){
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    return await response.json()
}

async function userEvents(username){
    const response = await fetch(`https://api.github.com/users/${username}/events`);
    return await response.json()
}

function getUserProfile(username) {

    user(username).then(userData => {
        // console.log(userData)
        // avatar_url
        // bio
        // name
        let userInfo = `    <div class="info">
                            <img src="${userData.avatar_url}" alt="Foto de perfil do usuario">
                            <div class="data">
                                <h1>${userData.name ?? 'não possui nome cadastrado 😒'}</h1>
                                <p>${userData.bio ?? 'não possui Bio Cadastrado 😢'}</p>
                                <p> Seguidores ${ userData.followers}-Seguindo ${userData.following}</p> 
                                <p>Login Usuario: ${userData.login}</p>
                            </div>
                            </div>`      
            document.querySelector('.profile-data').innerHTML = userInfo    
            getUserRepositories(username)        
            getUserEvents(username)        
    })
}
// buscar os dados da api assim como a function user 

function getUserRepositories(username){

    repos(username).then(reposData => {
        let repositoriesItens = ''
        reposData.forEach(repo => {
            repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}<br><br><span>😎${repo.forks}</span> - <span>👀${repo.watchers}</span> - <span>✨${repo.stargazers_count}</span> - <span>💷${repo.language}</span></a></li> `
            // console.log(repo)
        });
        document.querySelector('.profile-data').innerHTML += ` <div class="repositories section">
                                                                    <h2>Repositorios</h2>
                                                                    <ul>${repositoriesItens}</ul>
                                                            
                                                                </div>`
                                                            
    })

}

function getUserEvents(username){
    userEvents(username).then(eventsData => {
        
       let eventUser = ''
       eventsData.forEach(i => {
            // let commits = i.payload.commits[0].message
            let commits = i.payload.commits[0].message
            eventUser += `<li><a href="${i.id}" target="_blank"> ${i.repo.name} -- ${commits} </a></li> `
            console.log(commits)
        });

        document.querySelector('.profile-data').innerHTML += `
                                                                <div class="user-events section">
                                                                    <div class="events">
                                                                    <h2> Eventos </h2>
                                                                        <h3> ${eventUser}</h3>
                                                                    </div>
                                                                </div>`
    })

}
