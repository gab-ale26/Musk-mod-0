const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularCirculo(radio) {
    const circunferencia = 2 * Math.PI * radio;
    const area = Math.PI * radio * radio;

    console.log(`La circunferencia es ${circunferencia}`);
    console.log(`El área es ${area}`);
}

rl.question('Ingrese el radio del círculo: ', (respuesta) => {
    const radio = parseFloat(respuesta);

    if (isNaN(radio) || radio <= 0) {
        console.log('Por favor, ingrese un número válido mayor a 0.');
    } else {
        calcularCirculo(radio);
    }

    rl.close();
});