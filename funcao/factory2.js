function criarProduto(nome, preco) {
    return{
        nome, 
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('Celular', 1199.49))
console.log(criarProduto('Teclado', 350.99))
console.log(criarProduto('Monitor 32', 3800.99))