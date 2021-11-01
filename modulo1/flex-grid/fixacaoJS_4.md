function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    let contagem = 0

    for (let index = 0; index < arrayDeNumeros.length; index++) {     
     if(arrayDeNumeros[index] == numeroEscolhido) {
      contagem += 1   
     } 
    }

    if(contagem==0) {
        return `Número não encontrado`
    }
    let mensagem = `O número ${numeroEscolhido} aparece ${contagem}x`
    return mensagem
}