const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * @param {number} radio - El radio del círculo
 * @returns {number} - El área del círculo
 */
function calcularArea(radio) {
  return Math.PI * (radio * radio);
}

function pedirRadio() {
  rl.question('Ingrese el radio: ', (respuesta) => {
    const radio = parseFloat(respuesta);

    if (Number.isNaN(radio) || radio <= 0) {
      console.log('Por favor, ingrese un número válido mayor a 0.');
      pedirRadio();
      return;
    }

    const area = calcularArea(radio);
    console.log(El área del círculo es: ${area.toFixed(2)});
    rl.close();
  });
}

pedirRadio();