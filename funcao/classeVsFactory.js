class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar () {
        console.log(`Meu nome è ${this.nome}`)
    }
}

const p1 = new Pessoa('Sidinei')
p1.falar()

const criarPessoa = nome => {
    return{
        falar: () => console.log(`Meu nome è ${nome}`)
    }
}

const p2 = criarPessoa(`Valentina`)
p2.falar()