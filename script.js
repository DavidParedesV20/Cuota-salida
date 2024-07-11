function calculate() {
    const comida = parseFloat(document.getElementById('comida').value);
    const bebida = parseFloat(document.getElementById('bebida').value);
    const comenBeben = parseInt(document.getElementById('comenBeben').value);
    let soloComen = parseInt(document.getElementById('soloComen').value);
    let soloBeben = parseInt(document.getElementById('soloBeben').value);

    if (isNaN(comida) || isNaN(bebida) || isNaN(comenBeben) || isNaN(soloComen) || isNaN(soloBeben)) {
        document.getElementById('result').innerText = 'Por favor, ingrese todos los campos.';
        return;
    }

    const totalPersonas = comenBeben + soloComen + soloBeben;
    if (totalPersonas === 0) {
        document.getElementById('result').innerText = 'Debe haber al menos una persona en la reunión.';
        return;
    }

    // Si soloComen es 0, repartir el costo de la comida entre los que comen y beben
    if (soloComen === 0) {
        soloComen = comenBeben;
    }

    // Si soloBeben es 0, repartir el costo de la bebida entre los que comen y beben
    if (soloBeben === 0) {
        soloBeben = comenBeben;
    }

    const costoComidaPorPersona = comida / (comenBeben + soloComen);
    const costoBebidaPorPersona = bebida / (comenBeben + soloBeben);

    const resultado = `
        Cada persona que come y bebe debe poner: $${(costoComidaPorPersona + costoBebidaPorPersona).toFixed(2)}.<br>
        ${soloComen !== comenBeben ? `Cada persona que solo come debe poner: $${(comida / soloComen).toFixed(2)}.<br>` : ''}
        ${soloBeben !== comenBeben ? `Cada persona que solo bebe debe poner: $${(bebida / soloBeben).toFixed(2)}.` : ''}
    `;
    document.getElementById('result').innerHTML = resultado;
}
