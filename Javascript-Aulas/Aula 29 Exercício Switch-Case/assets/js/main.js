const h1 = document.querySelector('.container h1');
const data = new Date()

function getDiaSemanaTexto(diaSemana) {
const diasSemana = ['Domingo', 'Segunda-Feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
return diasSemana[diaSemana]
}

function getNomeMes(numeroMes) {
        const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
         return meses [numeroMes]
}

function criaData (data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes} ` +
    `de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`
    )
}

h1.innerHTML = criaData(data)






/* const h1 = document.querySelector('.container h1');
const data = new Date()
h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });
*/