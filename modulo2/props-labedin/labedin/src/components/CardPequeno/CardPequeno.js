import React from 'react'

function CardPequeno(props) {
  return (
    <div>
      <img src={props.imagem} />
      <div>
        <h4>{props.nome}</h4>
        <p>{props.descricao}</p>
      </div>
    </div>
  )
}

export default CardPequeno
