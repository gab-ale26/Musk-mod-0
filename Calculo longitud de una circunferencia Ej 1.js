const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function imprimirCircunferencia(radio) {
    return 2 * Math.PI * radio;
}

rl.question('Ingrese el radio de la circunferencia: ', (respuesta) => {
    const radio = parseFloat(respuesta);

    if (isNaN(radio) || radio <= 0) {
        console.log('Por favor, ingrese un número válido mayor a 0.');
    } else {
        const circunferencia = imprimirCircunferencia(radio);
        console.log(`La circunferencia es ${circunferencia}`);
    }

    rl.close();
});