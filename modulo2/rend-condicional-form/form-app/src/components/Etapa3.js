import React from 'react'

export default class Etapa1 extends React.Component {
  render() {
    return (
      <div>
        <h2>Etapa 3 - Informações gerais de ensino</h2>
        <h3>7. Por que você não concluiu o curso de graduação?</h3>
        <input type="text" placeholder="Nos detalhe o ocorrido." />
        <h3>8. Você fez algum curso complementar?</h3>
        <select value="Padrão">
          <option value="Padrão" selected>
            Selecione
          </option>
          <option value="Nenhumo">Nenhum</option>
          <option value="Curso técnico">Curso técnico</option>
          <option value="Curso de inglês">Curso de inglês</option>
        </select>
      </div>
    )
  }
}
