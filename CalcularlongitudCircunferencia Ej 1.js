const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularLongitudCircunferencia(radio) {
  return 2 * Math.PI * radio;
}

function pedirRadio() {
  rl.question('Ingrese el radio de la circunferencia: ', (respuesta) => {
    const radio = parseFloat(respuesta);

    if (Number.isNaN(radio) || radio <= 0) {
      console.log('Por favor, ingrese un número válido mayor a 0.');
      pedirRadio();
      return;
    }

    const longitud = calcularLongitudCircunferencia(radio);
    console.log(`La longitud de la circunferencia es ${longitud.toFixed(2)}`);
    rl.close();
  });
}

pedirRadio();