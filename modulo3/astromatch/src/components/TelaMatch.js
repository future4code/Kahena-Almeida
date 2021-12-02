import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const BoxTela = styled.div`
  height: 95vh;
  width: 25vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 35px;
  box-shadow: 0 0 1em black;
`
const HeaderMatch = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  height: 15vh;
  width: 25vw;

  background-color: silver;
  h3 {
    display: flex;
    margin-top: 3px;
    margin-left: 7px;
    font-family: 'Quicksand', sans-serif;
    color: red;
    font-size: 25px;
    align-items: center;
  }
  img {
    display: flex;
    margin-top: 17px;
    margin-right: 7px;
    height: 5vh;
  }
`

const BodyMatch = styled.div``

const CardMatch = styled.div`
  box-shadow: 0 0 1em black;
  display: flex;
  flex-direction: column;
  height: 55vh;
  width: 25vw;
`

export default function TelaMatch(props) {
  // const [novoPerfil, setnovoPerfil] = useState({})
  // const [proximo, setProximo] = useState(0)
  const [novoPerfil, setnovoPerfil] = useState({})
  const [mudarCard, setMudarCard] = useState(true)

  const passarProximo = () => {
    setMudarCard(!mudarCard)
  }
  useEffect(() => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:kahena/person`
      )
      .then(response => {
        const novoPerfilPrint = response.data.profile
        setnovoPerfil(novoPerfilPrint)
      })
      .catch(err => {
        console.log(err, 'Qual erro')
      })
  }, [mudarCard])
  console.log(novoPerfil, 'foi setado o novo perfil?')

  return (
    <BoxTela>
      <HeaderMatch>
        <h3>AstroMatch</h3>
        <img
          src="https://i.postimg.cc/nrJKcxRw/lista-de-convidados.png"
          alt="Icone de lista para acessar matchs."
          onClick={props.irPara}
        />
      </HeaderMatch>
      <BodyMatch>
        <CardMatch key={novoPerfil.id}>
          <img src={novoPerfil.photo} alt="Imagem do perfil do usuário.">
            <p>
              {novoPerfil.name},{novoPerfil.age}
            </p>
            <p>{novoPerfil.bio}</p>
          </img>
        </CardMatch>
        <img
          src="https://i.postimg.cc/xC0xtKYd/cruz.png"
          alt="Passar para próximo."
          onClick={passarProximo}
        />
        <img
          src="https://i.postimg.cc/sgQth9Dd/de-coracao.png"
          alt="Icone de adicionar na lista de matchs."
          onClick={props.array}
        />
      </BodyMatch>
    </BoxTela>
  )
}
