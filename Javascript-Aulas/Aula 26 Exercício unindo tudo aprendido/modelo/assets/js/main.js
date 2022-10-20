function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    

    function recebeEventoForm (evento) {
        const peso = form.querySelector('#declarapeso').value;
        const altura = form.querySelector('#declaraaltura').value;


        evento.preventDefault();
        const numero = (peso / (altura * altura));

    if (numero <= 18.5) {
     ('Você está abaixo do peso');
} else if (numero >= 18.6 && numero <= 24.9) {
    Text = 'Você está com o peso normal';
} else if (numero >= 25 && numero <= 29.9) {
    Text = 'Você está com sobrepeso'; 
} else if (numero >= 30 && numero <= 34.9) {
    Text = 'Obesidade grau 1';
} else if (numero >= 35 && numero <= 39.9) {
    Text = 'Obesidade grau 2';
} else if (numero >= 40) {
    Text = 'Obesidade grau 3';
} else if (numero === isNaN ) {
    Text = 'Coloque apenas numeros';
} else {
    Text = 'Ocorreu um erro';
}


}


form.addEventListener('submit', recebeEventoForm);

}

meuEscopo();