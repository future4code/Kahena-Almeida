import React from 'react'

export default class Etapa1 extends React.Component {
  render() {
    return (
      <div>
        <h2>Etapa 1 - Dados Gerais</h2>
        <h3>1. Qual seu nome?</h3>
        <input type="text" placeholder="Nome completo" />
        <h3>2. Qual sua idade?</h3>
        <input type="text" placeholder="Idade" />
        <h3>3. Qual seu email?</h3>
        <input type="text" placeholder="Email" />
        <h3>4. Qual sua escolaridade?</h3>
        {/* <select value="Padrão">
          <option value="Padrão" selected>
            Selecione
          </option>
          <option value="Ensino médio incompleto">
            Ensino médio incompleto
          </option>
          <option value="Ensino médio completo">Ensino médio completo</option>
          <option value="Ensino superior incompleto">
            Ensino superior incompleto
          </option>
          <option value="Ensino superior completo">
            Ensino superior completo
          </option>
        </select> */}
      </div>
    )
  }
}
