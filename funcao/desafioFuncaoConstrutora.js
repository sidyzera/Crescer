function Pessoa (nome){
        this.nome = nome
    
    this.falar = function() {
        console.log(`Meu nome è ${this.nome}`)
    }
}

const p1 = new Pessoa('Sidinei')
p1.falar()