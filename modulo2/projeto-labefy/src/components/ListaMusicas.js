import React from 'react'
import axios from 'axios'
import { Header, Colunas, AdcionarMusica, CardItem } from '../Styles'

export default class ListaMusicas extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listaMusicas: [],
      nome: '',
      artista: '',
      link: ''
    }
    this.handleNome = this.handleNome.bind(this)
    this.handleArtista = this.handleArtista.bind(this)
    this.handleLink = this.handleLink.bind(this)
  }

  componentDidMount() {
    this.listaMusicas()
    console.log(ListaMusicas)
  }

  listaMusicas = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.selectedId}/tracks`,
        {
          headers: {
            Authorization: 'Kahena-Mansano-Carvers'
          }
        }
      )
      .then(res => {
        this.setState({ listaMusicas: res.data.result.tracks })
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleNome = e => {
    this.setState({
      nome: e.target.value
    })
  }

  handleArtista = e => {
    this.setState({
      artista: e.target.value
    })
  }

  handleLink = e => {
    this.setState({
      link: e.target.value
    })
  }

  addMusica = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.selectedId}/tracks`
    const body = {
      name: this.state.nome,
      artist: this.state.artista,
      url: this.state.link
    }
    axios
      .post(url, body, {
        headers: {
          Authorization: 'Kahena-Mansano-Carvers'
        }
      })
      .then(res => {
        alert('Música criada com sucesso!')
        this.listaMusicas()
      })
      .catch(err => {
        console.log(err)
      })
  }

  deletarMusica = id => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.selectedId}/tracks/${id}`
    axios
      .delete(url, {
        headers: {
          Authorization: 'Kahena-Mansano-Carvers'
        }
      })
      .then(res => {
        alert('Música deletada!')
        this.listaMusicas()
      })
      .catch(err => {
        alert('Ocorreu um erro!')
      })
  }

  render() {
    const mostrarLista = this.state.listaMusicas.map(item => {
      return (
        <CardItem key={item.id}>
          {item.name} - Música: {item.artist}
          <button onClick={() => this.deletarMusica(item.id)}>x</button>
          <button onClick={() => this.props.irParaReproducao(item.url)}>
            ⇰
          </button>
        </CardItem>
      )
    })
    return (
      <div>
        <Header>Lista de Músicas:</Header>
        <Colunas>{mostrarLista}</Colunas>
        <h2>Adcionar nova música:</h2>
        <AdcionarMusica>
          <input
            type="text"
            placeholder="Nome"
            value={this.state.nome}
            onChange={this.handleNome}
          ></input>
          <input
            type="text"
            placeholder="Artista"
            value={this.state.artista}
            onChange={this.handleArtista}
          ></input>
          <input
            type="text"
            placeholder="YouTube, watch?v='...'"
            value={this.state.link}
            onChange={this.handleLink}
          ></input>
          <button type="button" onClick={this.addMusica}>
            Adcionar
          </button>
        </AdcionarMusica>
      </div>
    )
  }
}
