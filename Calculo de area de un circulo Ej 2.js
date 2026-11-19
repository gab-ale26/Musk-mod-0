const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
/**
 * @param {number} radio - El radio del circulo
 * @returns {number} - El área del circulo
 */
function calcularArea(radio) {
    return Math.PI * (radio * radio);
}

rl.question('Ingrese el radio: ', (respuesta) => {
    const radio = parseFloat(respuesta);

    if (isNaN(radio) || radio < 0) {
        console.log('Por favor, ingrese un número válido.');    
    } else {
        const area = calcularArea(radio);
        console.log(`El área del circulo es: ${area}`);
    }
    
    rl.close();
});