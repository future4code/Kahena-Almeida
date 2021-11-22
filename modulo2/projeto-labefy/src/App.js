import React from 'react'
import { AreaTotal } from './Styles'
import TelaInicial from './components/TelaInicial'
import ListaPlaylists from './components/ListaPlaylists'
import ListaMusicas from './components/ListaMusicas'
import ReproduzirMusica from './components/ReproduzirMusica'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      telaAtual: 'Inicial',
      idPlaylist: '',
      idMusica: ''
    }
    this.irParaTelaInicial = this.irParaTelaInicial.bind(this)
    this.irParaPlaylists = this.irParaPlaylists.bind(this)
    this.irParaMusicas = this.irParaMusicas.bind(this)
    this.irParaReproducao = this.irParaReproducao.bind(this)
  }

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case 'Inicial':
        return <TelaInicial irParaPlaylists={this.irParaPlaylists} />
      case 'Lista Playlists e add':
        return <ListaPlaylists irParaMusicas={this.irParaMusicas} />
      case 'Lista Musicas e add':
        return (
          <ListaMusicas
            selectedId={this.state.idPlaylist}
            irParaReproducao={this.irParaReproducao}
          />
        )
      case 'Reproduzir Musica':
        return (
          <ReproduzirMusica
            selectedId={this.state.idMusica}
            irParaTelaInicial={this.irParaTelaInicial}
          />
        )
      default:
        return <TelaInicial irParaTelaInicial={this.irParaTelaInicial} />
    }
  }

  irParaTelaInicial = () => {
    this.setState({ telaAtual: 'Inicial' })
  }

  irParaPlaylists = () => {
    this.setState({ telaAtual: 'Lista Playlists e add' })
  }

  irParaMusicas = id => {
    this.setState({ telaAtual: 'Lista Musicas e add', idPlaylist: id })
  }

  irParaReproducao = url => {
    console.log(url, 'url do vídeo')
    this.setState({ telaAtual: 'Reproduzir Musica', idMusica: url })
  }

  render() {
    return <AreaTotal>{this.escolheTela()}</AreaTotal>
  }
}
