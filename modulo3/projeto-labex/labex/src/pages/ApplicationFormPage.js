import React from 'react'
import { useHistory } from 'react-router-dom'

function ApplicationForm() {
  const history = useHistory()

  const goToHome = () => {
    history.push('/')
  }
  return (
    <div>
      <form>
        <select type="text">Qual excursão te interessou?</select>
        <input
          type="text"
          placeholder="Seu nome"
          value={nameForm}
          onChange={handleNome}
        ></input>
        <input
          type="number"
          placeholder="Sua idade"
          value={ageForm}
          onChange={handleAge}
        ></input>
        <input
          type="text"
          placeholder="Fale mais sobre você, seus interesses..."
          value={intForm}
          onChange={handleInt}
        ></input>
        <input
          type="text"
          placeholder="Qual sua profissão?"
          value={profForm}
          onChange={handleProf}
        ></input>
        <input
          type="text"
          placeholder="Sua nacionalidade"
          value={nacForm}
          onChange={handleNac}
        ></input>
      </form>
      <button onClick={goToHome}>
        <img
          src="https://i.postimg.cc/y6QVvCCw/seta-esquerda.png"
          alt="Seta voltar"
        />
      </button>
      <button>Inscrever-me</button>
      <img
        src="https://i.postimg.cc/tCqBR81C/istockphoto-1026535190-170667a-removebg-preview.png"
        alt="Mala de viagem."
      />
    </div>
  )
}

export default ApplicationForm
