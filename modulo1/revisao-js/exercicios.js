// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array.sort(function(a, b) {
    return (a - b)
    })
    return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    array.filter(value % 2 == 0)
    return
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let novoArray = []
    for (let index = 0; index < array.length; index++) {
        if((array[index] % 2) == 0){
            novoArray.push(array[index] * array[index])
        }
    }
    return novoArray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = -Infinity
     for (let index = 0; index < array.length; index++) {
        if (array[index] > maior) {
            maior = array[index]
        } 
    }
    return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let resultado = {
        maiorNumero: null,
        maiorDivisivelPorMenor: null,
        diferenca: null
    }
    if (num1 > num2) {
        resultado.maiorNumero = num1
        resultado.maiorDivisivelPorMenor = (resultado.maiorNumero % num2) == 0
        resultado.diferenca = resultado.maiorNumero - num2       
    } else {
        resultado.maiorNumero = num2
        resultado.maiorDivisivelPorMenor = (resultado.maiorNumero % num1) == 0
        resultado.diferenca = resultado.maiorNumero - num1
    }
    return resultado
}
    

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const array = []
    let contagem = 0
    while (array.length < n) {
        if ((contagem % 2) == 0) {
        array.push(contagem)
        }
        contagem++        
    }
    return array
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA == ladoB && ladoB == ladoC && ladoC == ladoA) {
        let mensagem = `Equilátero`
        return mensagem
    } else if (ladoA == ladoB && ladoB !== ladoC && ladoC !== ladoA) {
        let mensagem = `Isósceles`
        return mensagem
    } else if (ladoA !== ladoB && ladoB == ladoC && ladoC !== ladoA) {
        let mensagem = `Isósceles`
        return mensagem
    } else if (ladoA == ladoC && ladoC !== ladoB && ladoB !== ladoA ) {
        let mensagem = `Isósceles`
        return mensagem
    } else if (ladoA !== ladoC && ladoB !== ladoA && ladoC !== ladoB) {
        let mensagem = `Escaleno`
        return mensagem
    }    

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    if (array.length <= 2) {
        return array
    } else {
    array.sort((a, b) => a - b)
    console.log (array)


    array.pop()
    array.shift()
    console.log(array)

    
    let segundoMaior = array[array.length - 1]
    let segundoMenor = array[0]

    const mensagem = [segundoMaior, segundoMenor]
    return mensagem
    }
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   let mensagem = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
   return mensagem
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const novoObjeto = {...pessoa, nome:'ANÔNIMO'}
   return novoObjeto
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let arrayPessoasAutorizadas = []
    for (let index = 0; index < pessoas.length; index++) {
        if (pessoas[index].idade > 14 && pessoas[index].idade < 60 && pessoas[index].altura > 1.5) {
            arrayPessoasAutorizadas.push(pessoas[index])
        } 
    } 
   return arrayPessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let arrayPessoasNaoAutorizadas = []
    for (let index = 0; index < pessoas.length; index++) {
        if (pessoas[index].idade <= 14) {
            arrayPessoasNaoAutorizadas.push(pessoas[index])
        } else if (pessoas[index].idade > 60) {
            arrayPessoasNaoAutorizadas.push(pessoas[index])
        } else if (pessoas[index].altura < 1.5) {
            arrayPessoasNaoAutorizadas.push(pessoas[index])
        } 
    } 
   return arrayPessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    contas[0].saldoTotal = 500
    contas[0].compras = []
    contas[1].saldoTotal = 6260
    contas[1].compras = []
    contas[2].saldoTotal = -3340
    contas[2].compras = []
    contas[3].saldoTotal = -1900
    contas[3].compras = []
    contas[4].saldoTotal = 1300
    contas[4].compras = []
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    consultas.sort(function(a, b){
        if(a.nome < b.nome) { return -1; }
        if(a.nome > b.nome) { return 1; }
        return 0;
    })
    return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}