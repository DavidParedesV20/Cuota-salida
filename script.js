function calculate() {
    const costAlcohol = parseFloat(document.getElementById('costAlcohol').value) || 0;
    const costFood = parseFloat(document.getElementById('costFood').value) || 0;
    const numEatDrink = parseInt(document.getElementById('numEatDrink').value) || 0;
    const numEat = parseInt(document.getElementById('numEat').value) || 0;
    const numDrink = parseInt(document.getElementById('numDrink').value) || 0;

    let totalEatDrink = numEatDrink > 0 ? (costFood + costAlcohol) / numEatDrink : 0;
    let totalEat = numEat > 0 ? costFood / numEat : 0;
    let totalDrink = numDrink > 0 ? costAlcohol / numDrink : 0;

    if (numEatDrink > 0 && numEat > 0 && numDrink > 0) {
        totalEatDrink = (costFood + costAlcohol) / (numEatDrink + numEat + numDrink);
        totalEat = costFood / (numEatDrink + numEat);
        totalDrink = costAlcohol / (numEatDrink + numDrink);
    }

    document.getElementById('resultText').innerText = 
        `Costo por persona que come y bebe alcohol: $${totalEatDrink.toFixed(2)}\n` +
        `Costo por persona que solo come: $${totalEat.toFixed(2)}\n` +
        `Costo por persona que solo bebe: $${totalDrink.toFixed(2)}`;
}
