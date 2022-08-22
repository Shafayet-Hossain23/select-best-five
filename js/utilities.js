// function playerSelection(playerNameId, btnName) {
//     const callPlayerNameSection = document.getElementById(playerNameId);
//     const innerName = callPlayerNameSection.innerText;
//     const callPlayerList = document.getElementById('player-list');
//     const CreateLi = document.createElement('li');
//     CreateLi.innerText = innerName;
//     callPlayerList.appendChild(CreateLi);
//     const callBtn = document.getElementById(btnName);
//     callBtn.setAttribute('disabled', true);
//     callBtn.style.backgroundColor = 'darkgray';
// }
function playerSelection(playerNameId, btnName) {

    const callPlayerList = document.getElementById('player-list');
    const listNumber = callPlayerList.childNodes.length;
    if (listNumber < 6) {
        const callPlayerNameSection = document.getElementById(playerNameId);
        const innerName = callPlayerNameSection.innerText;
        // const callPlayerList = document.getElementById('player-list');
        const CreateLi = document.createElement('li');
        CreateLi.innerText = innerName;
        callPlayerList.appendChild(CreateLi);
        const callBtn = document.getElementById(btnName);
        callBtn.setAttribute('disabled', true);
        callBtn.style.backgroundColor = 'darkgray';
    }
    else {
        alert('You can selcet only five player');
    }

}

// ...calculation - Selection....
function getInputField(inputId) {
    const callInputField = document.getElementById(inputId);
    const inputValueString = callInputField.value;
    const inputValue = parseFloat(inputValueString);
    callInputField.value = '';
    return inputValue;
}

function getInnerText(innerId, value) {
    const callInnerTextId = document.getElementById(innerId);
    callInnerTextId.innerText = value;
}