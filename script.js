function calculate() {
    const costAlcohol = parseFloat(document.getElementById('costAlcohol').value) || 0;
    const costFood = parseFloat(document.getElementById('costFood').value) || 0;
    const numEatDrink = parseInt(document.getElementById('numEatDrink').value) || 0;
    const numEat = parseInt(document.getElementById('numEat').value) || 0;
    const numDrink = parseInt(document.getElementById('numDrink').value) || 0;

    const totalNumEat = numEatDrink + numEat;
    const totalNumDrink = numEatDrink + numDrink;

    let totalEatDrink = numEatDrink > 0 ? (costFood / totalNumEat) + (costAlcohol / totalNumDrink) : 0;
    let totalEat = totalNumEat > 0 ? costFood / totalNumEat : 0;
    let totalDrink = totalNumDrink > 0 ? costAlcohol / totalNumDrink : 0;

    document.getElementById('resultText').innerText = 
        Costo por persona que come y bebe alcohol: $${totalEatDrink.toFixed(2)}\n +
        Costo por persona que solo come: $${totalEat.toFixed(2)}\n +
        Costo por persona que solo bebe: $${totalDrink.toFixed(2)};
}
