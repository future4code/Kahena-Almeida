import React from 'react'
import style from 'styled-components'

const StyleInicial = style.div`
margin:0,
padding:0,
`

export default class TelaInicial extends React.Component {
  render() {
    return (
      <div>
        <StyleInicial>
          <h2>Bem vindo ao Labefy!</h2>
          <button onClick={this.props.irParaPlaylists}>
            Clique aqui para acessar ou criar suas playlists!
          </button>
        </StyleInicial>
      </div>
    )
  }
}
