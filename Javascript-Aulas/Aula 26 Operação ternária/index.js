// ? :
// Condicao ? 'Valor para verdadeiro' : 'Valor para falso'
const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIp' : 'Usuário normal'
console.log(nivelUsuario);

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario,corPadrao);
/* if(pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário normal');
} */
