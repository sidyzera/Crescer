// Armazenando uma dunção em uma váriavel
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// Retorno implícito
const sunbtracao = (a, b) => a - b
console.log(sunbtracao(2, 3))