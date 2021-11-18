import React from 'react'

export default class ListaPlaylists extends React.Component {
  state = {
    salvarNovaPlaylist: '',
    ListaPlaylists: []
  }

  handleNome = e => {
    this.setState({ salvarNovaPlaylist: e.target.value })
  }

  criarPlaylist = () => {
    ListaPlaylists([...ListaPlaylists, salvarNovaPlaylist])
  }

  // CriarPlaylist = novoNome => {
  //   const novaPlaylist = ListaPlaylists.find(novoNome) {
  //     if (novoNome ===) {
  //       alert('Este nome de playlist já existe!')
  //     } else {
  //       alert('Playlist criada com sucesso!')

  //     }
  //   }
  // }

  render() {
    // const playlistAtual = this.state.ListaPlaylists.map((p) => {
    //   return (
    //     <ItemPlaylist
    //     nomePlaylist={p.nomePlaylist}
    //     />
    //     <button onClick={this.props.irParaMusicas}>Abrir Playlist</button>
    //     <button onClick={this.excluirPlaylist}>Excluir Playlist</button>
    //   )
    // }

    return (
      <div>
        {/* {playlistAtual} */}
        <h2>Nova playlist:</h2>
        <input
          placeholder="Nome da playlist"
          type={Text}
          value={this.state.salvarNovaPlaylist}
          onChange={this.handleNome}
        ></input>
        <button onClick={this.handleNome}>Criar</button>
      </div>
    )
  }
}
