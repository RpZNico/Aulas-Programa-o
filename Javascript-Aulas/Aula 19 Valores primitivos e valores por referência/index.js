/*
Dados Primitivos - string, number, boolean, undefined, null (bigint, symbol) - vALORES QUE SÃO COPIADOS PARA OUTROS DADOS, independentes

Refenrência (mutável) - array, object, function - VALORES PASSADOS POR REFERÊNCIA, transforma a variavel, fazendo ela apontar pro mesmo valor


*/
/* 
let a = [1, 2, 3]
let b = [...a]
let c = b;
console.log(a, b);

a.push(4)
console.log(a, b);

b.pop ();
console.log(a, b);

a.push('Luiz');
console.log(b, c); */


const a = {
    nome: 'Luiz',
    sobrenome: 'Ótavio'
}

const b = a;

a.nome = 'João';
console.log(b);
console.log(a);