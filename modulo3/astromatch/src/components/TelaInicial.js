import React from 'react'
import { BoxTela, ImgLogo, ImgSombra } from './TelaInicialStyle'

export default function TelaInicial(props) {
  return (
    <BoxTela>
      <ImgLogo>
        <img
          src="https://i.postimg.cc/s2pmcPmQ/heart1.png"
          alt="Logo de mensagem com coração dentro"
        />
      </ImgLogo>
      <ImgSombra>
        <img
          width="220"
          src="https://i.postimg.cc/J0d5nprg/as-sombras-ovais-ou-redondas-vector-o-grupo-real-stico-no-fundo-transparente-vetor-eps-93094927.jpg"
          alt="Sombra do ícone"
        />
      </ImgSombra>
      <p>
        Encontre seu <br />
        match perfeito.
      </p>
      <button onClick={props.irPara}>Buscar</button>
    </BoxTela>
  )
}
