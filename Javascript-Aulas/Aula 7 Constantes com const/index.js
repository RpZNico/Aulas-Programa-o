// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não pode começar o nome de um constantes com um número
// Não pode conter espaços ou traços
// Utilizamos camelCase - primeira minuscula
// Case-sensisitive - Letra maiúsucla ou minúsucla fazem diferença
// Não pode modificar o valor de uma constante
// NÂO UTILIZE VAR, UTILIZE CONST.
// + - * /
// String = texto (dentro das aspas) | Fora de aspas = Número
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado  * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(typeof (primeiroNumero + segundoNumero));