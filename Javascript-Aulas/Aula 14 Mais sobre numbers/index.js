// IEEE 754-2008

let num1 = 0.7;
let num2 = 0.1;

num1 = ((num1 *100) + (num2 * 100)) / 100; // 0.8
num1 = ((num1 *100) + (num2 * 100)) / 100; // 0.9
num1 = ((num1 *100) + (num2 * 100)) / 100; // 1.0

num1 = Number(num1.toFixed(2)); // vai deixar o número so com duas casa decimais, resolvendo a imprecisão
num1 

console.log(num1);
console.log(num1.toFixed(2)); // Ele mostra o número precisamente, mas o sistema não lê ele exato, serve só para mostrar sem a conta exata
console.log(Number.isInteger(num1));

/* console.log(num1.toString() + num2); Temporariamente converte para string
num1 = num1.toString(); 
// console.log(num1.toString(2)); -  Transforma o número em binário
// console.log(num1.toFixed()); - Você determina quantas casas decimais você quer
// console.log(Number.isInteger(num1)); - Diz se o número é um número inteiro ou ão
let temp = num1 * `5`;
console.log(Number.isNaN(temp)); // retorna se valor é ou não é um número

*/

