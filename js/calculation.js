document.getElementById('btn-calc').addEventListener('click', function () {
    const perPlayerCost = getInputField('player-cost-field');
    if (isNaN(perPlayerCost)) {
        alert("Please Enter Valid Amount");
    }
    else {

        const callPlayerList = document.getElementById('player-list');
        const listNumber = (callPlayerList.childNodes.length) - 1;
        const totalPlayerCost = perPlayerCost * listNumber
        getInnerText('player-cost-total', totalPlayerCost);

    }



})

document.getElementById('btn-total').addEventListener('click', function () {
    const mangerCost = getInputField('manager-cost-field');
    const coachCost = getInputField('coach-field');
    if (isNaN(mangerCost)) {
        alert("Please Enter Valid Amount");
    }
    else if (isNaN(coachCost)) {
        alert("Please Enter Valid Amount");
    }
    else {
        const managerCoachCost = mangerCost + coachCost;
        const callInnerPlayer = document.getElementById('player-cost-total');
        const innerPlayerCoststring = callInnerPlayer.innerText;
        const totalPlayerCost = parseFloat(innerPlayerCoststring);
        const totalCalculation = managerCoachCost + totalPlayerCost;
        getInnerText('total-cost', totalCalculation);
    }



})