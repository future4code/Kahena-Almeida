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
      telaAtual: 'Inicial'
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
        return <ListaMusicas irParaReproducao={this.irParaReproducao} />
      case 'Reproduzir Musica':
        return <ReproduzirMusica irParaTelaInicial={this.irParaTelaInicial} />
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

  irParaMusicas = () => {
    this.setState({ telaAtual: 'Lista Musicas e add' })
  }

  irParaReproducao = () => {
    this.setState({ telaAtual: 'Reproduzir Musica' })
  }

  render() {
    return <AreaTotal>{this.escolheTela()}</AreaTotal>
  }
}
