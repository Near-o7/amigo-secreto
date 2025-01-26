let friends = []

function addFriend(){
    friendName = document.querySelector('#amigo').value
    console.log(friendName)
    if (friendName === ""){
        alert('Por favor, inserte un nombre.')
    }else{
        friends.push(friendName)
        clearBox()
        console.log(friends)
    }
}

function clearBox(){
    document.querySelector('#amigo').value = ''
}