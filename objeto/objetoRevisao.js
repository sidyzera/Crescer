// coleção diâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Sidinei',
        idade: 35,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    construtores: [{
        nome: 'João',
        idade: 30
    }, {
        nome: 'Ana',
        idade: 34
    }],
    calcularValorSeguro: function(){
        // ...
    }
}

carro.proprietario.endereco.numero = 100
carro['proprietario']['endereco']['logradouro'] = 'Avenida Feliz'
console.log(carro)

// delete carro.construtores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.construtores)
console.log(carro.construtores.length)