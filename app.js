let amigos = []

function addFriend(){
    friendName = document.querySelector('#amigo').value
    console.log(friendName)
    if (friendName === ""){
        alert('Por favor, inserte un nombre.')
    }else{
        amigos.push(friendName)
        clearBox()
        listFriends()
        console.log(amigos)
    }
}

function clearBox(){
    document.querySelector('#amigo').value = ''
}

function listFriends(){
    let lista = document.querySelector('#listaAmigos')
    lista.innerHTML = ""
    for (let amigo of amigos) {
        let li = document.createElement('li');
        li.textContent = amigo;  
        lista.appendChild(li);   
    } 
}

function drawWinner(){
    if (amigos.length > 0 ){
        let randomNumber = Math.floor(Math.random()*amigos.length);
        let winner = amigos[randomNumber]
        winnerHTML = document.querySelector('#resultado')
        winnerHTML.innerHTML = `Felicidades ${winner}! saliste sorteado! ✨`
    }else{
        alert('Primero añade a un amigo')
    }
}