import React from 'react'
import './App.css'
import './components/Etapa1'
import styled from 'styled-components'
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import Etapa4 from './components/Etapa4'
import { render } from '@testing-library/react'

export default class App extends React.Component {
  state = {
    etapa: 1
  }

  handleClick(e) {
    const proxEstapa = this.state.etapa + 1
    this.setState({ etapa: proxEstapa })
  }

  render() {
    let pagina
    switch (this.state.etapa) {
      case 1:
        pagina = <Etapa1 />
        break
      case 2:
        pagina = <Etapa2 />
        break
      case 3:
        pagina = <Etapa3 />
        break
      case 4:
        pagina = <Etapa4 />
        break
    }

    return (
      <div>
        <header className="App-header">
          <h1>Formulário</h1>
        </header>
        <div className="App">
          <div className="Etapa">{pagina}</div>
          <div className="button">
            {this.state.etapa !== 4 && (
              <button onClick={this.handleClick.bind(this)}>
                Próxima etapa
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}
