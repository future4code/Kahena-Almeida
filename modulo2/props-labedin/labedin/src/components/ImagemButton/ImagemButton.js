import React from 'react'

function ImagemButton(props) {
  return (
    <div>
      <img src={props.imagem} />
      <p>{props.texto}</p>
    </div>
  )
}

export default ImagemButton
