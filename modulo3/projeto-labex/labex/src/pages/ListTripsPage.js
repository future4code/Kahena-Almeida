import React from 'react'

function ListTrips() {
  const cardsExcursoes = []
  return (
    <div>
      <button>
        <img
          src="https://i.postimg.cc/y6QVvCCw/seta-esquerda.png"
          alt="Seta voltar"
        />
      </button>
      <button>Inscrever-me</button>
      {cardsExcursoes}
      <h3>Escolha sua excursão e inscreva-se!</h3>
    </div>
  )
}

export default ListTrips
