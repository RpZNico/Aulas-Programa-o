/* Nicolas Matheus Borges tem 19 AnalyserNode, pesa 84kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Nicolas Matheus nasceu em 2003
*/


const nome = 'Nicolas Matheus';
const sobrenome = 'Borges';
const idade = 19;
const peso = 70;
const alturaEmM = 1.80;
let indiceMassaCorporal = 70 / (alturaEmM * alturaEmM); // peso / (altura * altura)
let anoNascimento = 2022 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`)
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`)
console.log(`${nome} nasceu em ${anoNascimento}.`)
