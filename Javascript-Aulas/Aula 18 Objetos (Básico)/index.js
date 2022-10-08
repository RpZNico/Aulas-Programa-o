const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: '25',

    fala () {
        console.log(`${this.nome} ${this.sobrenome} está falando oi... .A minha idade atual é ${this.idade}`);
    },

    incrementaIdade () {
        this.idade++;
    }
}

pessoa1.fala();
pessoa1.incrementaIdade ();
pessoa1.fala()
pessoa1.incrementaIdade ();
pessoa1.fala()
pessoa1.incrementaIdade ();
pessoa1.fala()










/* function criaPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade,
    }
}

const pessoa1 = criaPessoa ('Luiz', 'Miranda', 25)
const pessoa2 = criaPessoa ('Maria', 'Otávio', 42)
const pessoa3 = criaPessoa ('João', 'Morreira', 12)
const pessoa4 = criaPessoa ('Lucas', 'Lara', 23)
const pessoa5 = criaPessoa ('Nicolas', 'Sex', 14)

console.log(pessoa1.nome, pessoa2.nome);
 */



/* const pessoa1 = {
    nome: 'Nicolas',
    sobrenome: 'Borges',
    idade: 25,
}

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
 */

/* const nome01 = 'Luiz';
const sobrenome01 = 'Mirando';
const idade01 = 25;

const nome02 = 'Maria';
const sobrenome02 = 'Oliveira';
const idade02 = 55; */