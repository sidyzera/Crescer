function tratarErroElencar(erro){
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'menssagem'
    throw {
        nome: erro.nome,
        msg: erro.menssage,
        date: new Date
    }
}



function imprimirNomeGritado(obj){
    try {
        console.log(obj.nome.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroElencar(3)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Antonella'}
imprimirNomeGritado(obj)