const numero = Number(prompt('Digite um número:'));
const tituloNumero = document.getElementById("numero-titulo");
const texto = document.getElementById('texto');

tituloNumero.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML += `<p>A raiz quadrada dele é: ${Math.sqrt(numero)}.</p>`;
texto.innerHTML += `<p> O número ${numero} é inteiro? ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p> É NaN? ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p> Arredondando o seu número para baixo fica: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p> Arredondando o seu número para cima fica: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p> Com duas casas decimais ele fica: ${numero.toFixed(2)}.</p>`;