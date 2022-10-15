function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');


    function recebeEventoForm () {
        const peso = form.querySelector('.declarapeso')
        const altura = form.querySelector('.declaraaltura')
     
        const numero = (peso / altura * altura);
        console.log(numero);

    if (numero <= 18.5) {
    console.log('Você está abaixo do peso');
} else if (numero >= 18.6 && numero <= 24.9) {
    console.log('Você está com o peso normal');
} else if (numero >= 25 && numero <= 29.9) {
    console.log('Você está com sobrepeso'); 
} else if (numero >= 30 && numero <= 34,9) {
    console.log('Obesidade grau 1');
} else if (numero >= 35 && numero <= 39,9) {
    console.log('Obesidade grau 2');
} else if (numero >= 40) {
    console.log('Obesidade grau 3');
} else if (numero = NaN) {
    console.log('Coloque apenas numeros');
} else if (numero <= 0) {
    console.log('Ocorreu um erro');
}

}


}

meuEscopo();