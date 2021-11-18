import React from 'react'
import style from 'styled-components'
import TelaInicial from './components/TelaInicial'
import ListaPlaylists from './components/ListaPlaylists'
import ListaMusicas from './components/ListaMusicas'
import ReproduzirMusica from './components/ReproduzirMusica'

const FundoPadrao = style.div`
margin:0,
padding:0,
background-image: url(${props => props.img});,
background-repeat: no-repeat,
background-attachment: fixed, 
background-size: cover,
}
`

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      telaAtual: 'Inicial'
    }
    this.irParaTelaInicial = this.irParaTelaInicial.bind(this)
    this.irParaPlaylists = this.irParaPlaylists.bind(this)
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
    return (
      <div>
        <FundoPadrao
          img={
            'https://static.vecteezy.com/ti/vetor-gratis/p1/2834527-light-orange-vector-background-with-lines-colorful-gradiente-illustration-with-abstract-flat-lines-template-for-your-ui-design-vetor.jpg'
          }
        >
          {this.escolheTela()}
        </FundoPadrao>
      </div>
    )
  }
}
