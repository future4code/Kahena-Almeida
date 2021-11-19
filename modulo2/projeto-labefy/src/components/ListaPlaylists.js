import axios from 'axios'
import React from 'react'

export default class ListaPlaylists extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      novaPlaylist: {nome: '', , id: listaPlaylists.lenght},
      listaPlaylists: []
    }
    this.handleImputNome = this.handleImputNome.bind(this)
  }

  // handleNome = e => {
  //   this.setState({ salvarNovaPlaylist: e.target.value })
  // }

  // criarPlaylist = () => {
  //   ListaPlaylists([...ListaPlaylists, salvarNovaPlaylist])
  // }

  // CriarPlaylist = novoNome => {
  //   const novaPlaylist = ListaPlaylists.find(novoNome) {
  //     if (novoNome ===) {
  //       alert('Este nome de playlist já existe!')
  //     } else {
  //       alert('Playlist criada com sucesso!')

  //     }
  //   }
  // }

  playlistAtual = () => {
    // if (this.state.listaPlaylists.length !== 0) {
    //   return 
        axios.get(
          'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
          {
            headers: {
              Authorization: 'Kahena-Carvers'
            }
          }
        )
        .then(response => {
          console.log(response.data.result.list)
        })
    }
  }

  criarPlaylist = () => {
    // if (this.state.listaPlaylists.length !== 0) {
    //   return 
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const body = {
      nome: this.state.nome
    }
    axios.post(url, body, {
        headers: {
          Authorization: 'Kahena-Carvers'
        }
    })
    .then((res) => {
          alert("Nova playlist criada com sucesso!")
          this.setState({nome:''})
        })
    .catch((err) => {
      alert(err.response.data.message)
    })    
    
    }
  

  handleImputNome = (e) => {
    this.setState({
      novaPlaylist: {nome: e.target.value}
    })
  }

  novaPlaylist = async () => {
    const body = {
      name: this.setState.novaPlaylist
    }
    const response = await axios.post(
      'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
      body,
      {
        headers: {
          Authorization: 'Kahena-Carvers'
        }
      }
    )
    console.log(response)
  }

  render() {
    const { novaPlaylist } = this.state.novaPlaylist
    return (
      <div>
        {playlistAtual/}
        <h2>Nova playlist:</h2>
        <input
          type="text"
          placeholder="Nome da playlist"
          value={novaPlaylist}
          onChange={this.setState.novaPlaylist}
        ></input>
        <button onClick={this.novaPlaylist}>Criar</button>
      </div>
    )
  }
}
