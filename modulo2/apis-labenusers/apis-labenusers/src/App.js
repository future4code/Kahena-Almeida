import React from 'react'
import styled from 'styled-components'
import TelaLista from './components/TelaListaUsuarios'
import TelaCriar from './components/TelaCriarUsuario'

const TituloTela = styled.div`
  display: flex;
  background-color: gray;
  color: white;
  h1 {
    font-size: 18px;
  }
`

export default class App extends React.Component {
  state = {
    telaEscolhida: 'Olá! Aqui você pode criar um novo usuário!'
  }

  trocaPagina = () => {
    if (
      this.state.telaEscolhida === 'Olá! Aqui você pode criar um novo usuário!'
    ) {
      this.setState({
        telaEscolhida:
          'E aqui você pode ver e pesquisar os usuários já cadastrados!'
      })
    } else {
      this.setState({
        telaEscolhida: 'Olá! Aqui você pode criar um novo usuário!'
      })
    }
  }

  render() {
    return (
      <div>
        <TituloTela>
          <h1>{this.state.telaEscolhida}</h1>
        </TituloTela>
        <button onClick={this.trocaPagina}>Trocar de tela</button>
        {this.state.telaEscolhida ===
        'Olá! Aqui você pode criar um novo usuário!' ? (
          <TelaLista />
        ) : (
          <TelaCriar />
        )}
      </div>
    )
  }
}
