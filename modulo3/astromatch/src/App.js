import React, { useState } from 'react'
import { FundoTela } from './AppStyle'
import TelaInicial from './components/TelaInicial'
import TelaMatch from './components/TelaMatch'
import TelaListaMatch from './components/TelaListaMatch'

export default function App(props) {
  const [telaAtual, setTelaAtual] = useState('Tela Inicial')
  const [arrayLista, setArrayLista] = useState([])
  // const [proximo, setProximo] = useState(0)

  const mudarTela = () => {
    switch (telaAtual) {
      case 'Tela Inicial':
        return <TelaInicial irPara={telaMatch} />
      case 'Tela Match':
        return <TelaMatch irPara={listaMatch} array={arrayListaMatch} />
      case 'Tela Lista Match':
        return <TelaListaMatch />
      default:
        return <TelaMatch />
    }
  }

  const telaMatch = () => {
    setTelaAtual('Tela Match')
  }

  const listaMatch = () => {
    setTelaAtual('Tela Lista Match')
  }

  const arrayListaMatch = match => {
    let novaLista = [...arrayLista]
    setArrayLista(novaLista.push(match))
  }

  return <FundoTela>{mudarTela()}</FundoTela>
}
