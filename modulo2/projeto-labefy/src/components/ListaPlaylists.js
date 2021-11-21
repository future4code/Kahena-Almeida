import axios from 'axios'
import React from 'react'
import { CardItem, Colunas } from '../Styles'

export default class ListaPlaylists extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      novaPlaylist: '',
      listaPlaylists: []
    }
    this.handleNome = this.handleNome.bind(this)
    this.playlistAtual = this.playlistAtual.bind(this)
  }

  componentDidMount() {
    this.playlistAtual()
  }

  playlistAtual = () => {
    axios
      .get(
        'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
        {
          headers: {
            Authorization: 'Kahena-Mansano-Carvers'
          }
        }
      )
      .then(res => {
        console.log('res', res.data)
        this.setState({ listaPlaylists: res.data.result.list })
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleNome = e => {
    this.setState({
      novaPlaylist: e.target.value
    })
  }

  criarNovaPlaylist = () => {
    const url =
      'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
    const body = {
      name: this.state.novaPlaylist
    }
    axios
      .post(url, body, {
        headers: {
          Authorization: 'Kahena-Mansano-Carvers'
        }
      })
      .then(res => {
        alert('Playlist criada com sucesso!')
        this.playlistAtual()
      })
      .catch(err => {
        alert('Este nome de playlist já existe!')
      })
  }

  deletarPlaylist = id => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
    axios
      .delete(url, {
        headers: {
          Authorization: 'Kahena-Mansano-Carvers'
        }
      })
      .then(res => {
        alert('Playlist deletada!')
        this.playlistAtual()
      })
      .catch(err => {
        alert('Ocorreu um erro!')
      })
  }

  // criarNovaPlaylist = async () => {
  //       const body = {
  //     name: this.setState.novaPlaylist
  //   }
  //   const response = await axios.post(
  //     'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
  //     body,
  //     {
  //       headers: {
  //         Authorization: 'Kahena-Carvers'
  //       }
  //     }
  //   )
  //   console.log(response)
  // }

  render() {
    const mostrarLista = this.state.listaPlaylists.map(item => {
      return (
        <CardItem key={item.id}>
          {item.name}
          <button onClick={() => this.deletarPlaylist(item.id)}>x</button>
        </CardItem>
      )
    })

    return (
      <div>
        <Colunas>{mostrarLista}</Colunas>
        <h2>Nova playlist:</h2>
        <input
          type="text"
          placeholder="Nome da playlist"
          value={this.state.novaPlaylist}
          onChange={this.handleNome}
        ></input>
        <button type="button" onClick={this.criarNovaPlaylist}>
          Criar
        </button>
      </div>
    )
  }
}
