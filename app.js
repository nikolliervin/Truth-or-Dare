//main

let startPlayers=document.getElementById('playersContainer');
let startAddPlayer=document.getElementById('addPlayer');
let startInputPlayer=document.getElementById('inputPlayer');

let players=[];


startAddPlayer.addEventListener('click',()=>{
    players.push((startInputPlayer).value);
    
    let playersContainer=document.createElement('p');
    let playersContainerText=document.createTextNode((startInputPlayer).value);
    playersContainer.appendChild(playersContainerText);
    startPlayers.append(playersContainer);


})
