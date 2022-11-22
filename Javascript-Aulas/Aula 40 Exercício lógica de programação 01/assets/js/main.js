// Escreva uma função que recebe 2 números e retorne o maior deles
const num1 = 5
const num2 = 17
function retorna (num1, num2) {
   const resultado = Math.max(num1, num2)
    return resultado
}




const maior = retorna(num1, num2)
console.log(maior);


const max2 = (x, y) => x > y ? x : y;
console.log(max2(10,500));