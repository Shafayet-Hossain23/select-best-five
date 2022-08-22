function playerSelection(playerNameId, btnName) {
    const callPlayerNameSection = document.getElementById(playerNameId);
    const innerName = callPlayerNameSection.innerText;
    const callPlayerList = document.getElementById('player-list');
    const CreateLi = document.createElement('li');
    CreateLi.innerText = innerName;
    callPlayerList.appendChild(CreateLi);
    const callBtn = document.getElementById(btnName);
    callBtn.setAttribute('disabled', true);
    callBtn.style.backgroundColor = 'darkgray';
}