import React from 'react'

export default class Etapa1 extends React.Component {
  render() {
    return (
      <div>
        <h2>Etapa 2 - Informações do ensino superior</h2>
        <h3>5. Qual curso?</h3>
        <input type="text" placeholder="Curso superior" />
        <h3>6. Qual unidade de ensino?</h3>
        <input type="text" placeholder="Unidade e localização" />
      </div>
    )
  }
}
