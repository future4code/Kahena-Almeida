import React from 'react'
import { AreaTotal, Header } from '../Styles'

export default class TelaInicial extends React.Component {
  render() {
    return (
      <AreaTotal>
        <Header>Bem vindo ao Labefy!</Header>
        <button onClick={this.props.irParaPlaylists}>
          Clique aqui para acessar ou criar suas playlists!
        </button>
      </AreaTotal>
    )
  }
}
