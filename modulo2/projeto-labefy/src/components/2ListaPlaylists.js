import axios from 'axios'
import React from 'react'

export default class 2ListaPlaylists extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      novaPlaylist: '',
      listaPlaylists: []
    }
  }

  handleNome = event => {
    this.setState({ nome: event.target.value })
  }

  render() {
    return (
      <div>
        <h2>Nova playlist:</h2>
        <input
          placeholder={'Nome da playlist'}
          value={this.state.novaPlaylist}
          onChange={this.handleNome}
        ></input>
        <button>Criar</button>
      </div>
    )
  }
}
