/*
&& -> false && true = false "O valor mesmo"
|| -> true || false -> vai retornar "o valor verdadeiro"

FALSY
false 
0
'' , "", ``
null / undefined
NaN
*/
// console.log('Luiz' && '' && 'Maria');


/* function falaOi () { return 'Oi';
}

const vaiExecutar = 'joão';

console.log(vaiExecutar && falaOi()); */

/* const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto';

console.log(corPadrao); */


const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);
