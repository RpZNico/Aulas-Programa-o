// for in -> Lê os índices ou chaves do objeto


const pessoa = {
    nome: 'Nicolas',
    sobrenome: 'Borges',
    idade: 30
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

// const chave = 'nome'
// console.log(pessoa[chave]);


