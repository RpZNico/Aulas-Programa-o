
// Se isso ocorrer (numero >= 0 &&  numero <= 5) ocorrer, faça isso {código}
// Se não, faça isso {o código}
// Ele vai checar a informação, e a primeira que der verdadeiro a função, ela executara
const numero = 10;


 if (numero <= 10) {
    console.log('O número é menor que 10.');
} 

if (numero >= 0 &&  numero <= 5) {
    console.log('O número está entre 0 e 5.');
} else if (numero >= 6 && numero <= 8) {
    console.log('O número está entre 6 e 8.')
} else if (numero >=9 && numero <= 11) {
    console.log('O número está entre 9 e 11.');
} else {
    console.log('O número não está entre 0 e 11.');
}


console.log('...Aqui vem o resto do código');