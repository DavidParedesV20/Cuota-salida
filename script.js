function calculate() {
    const bebidas = parseFloat(document.getElementById('bebidas').value) || 0;
    const comida = parseFloat(document.getElementById('comida').value) || 0;
    const comenBeben = parseInt(document.getElementById('comenBeben').value) || 0;
    const soloComen = parseInt(document.getElementById('soloComen').value) || 0;
    const soloBeben = parseInt(document.getElementById('soloBeben').value) || 0;

    if ((bebidas === 0 && comida === 0) || (comenBeben === 0 && soloComen === 0 && soloBeben === 0)) {
        document.getElementById('result').innerText = 'Por favor, ingrese todos los campos.';
        return;
    }

    let resultado = '';

    if (comenBeben > 0) {
        const costoComidaPorPersona = comida / (comenBeben + soloComen);
        const costoBebidaPorPersona = bebidas / (comenBeben + soloBeben);
        resultado += `Cada persona que come y bebe debe poner: $${(costoComidaPorPersona + costoBebidaPorPersona).toFixed(2)}.<br>`;
    }

    if (soloComen > 0) {
        const costoComidaPorPersona = comida / (comenBeben + soloComen);
        resultado += `Cada persona que solo come debe poner: $${costoComidaPorPersona.toFixed(2)}.<br>`;
    }

    if (soloBeben > 0) {
        const costoBebidaPorPersona = bebidas / (comenBeben + soloBeben);
        resultado += `Cada persona que solo bebe debe poner: $${costoBebidaPorPersona.toFixed(2)}.<br>`;
    }

    document.getElementById('result').innerHTML = resultado;
}
