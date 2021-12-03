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

export default function TelaListaMatch(props) {
  const [listaMatchs, setlistaMatchs] = useState([])

  useEffect(() => {
    verLista()
  }, [])

  const verLista = () => {
    axios
      .get(
        'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kahena/matches'
      )
      .then(response => {
        const novaLista = response.data
        setlistaMatchs(novaLista)
      })
      .catch(err => {
        alert(err.message)
      })
  }

  const limparLista = () => {
    const url =
      'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kahena/clear'

    axios
      .post(url, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        alert('Pronte pra tentar de novo? ❤')
        console.log(res)
      })
      .catch(err => {
        alert('Não foi limpo, virou karma :/')
        console.log(err)
      })
  }

  debugger
  console.log(listaMatchs, 'foi setado a lista?')

  const cardsPrint = listaMatchs.map(item => {
    return (
      <CardMatch key={item.id}>
        <img src={item.photo} alt="Imagem do perfil do usuário." />
        <p>{item.name}</p>
      </CardMatch>
    )
  })

  return (
    <BoxTela>
      <HeaderMatch>
        <button onClick={props.irPara}>←</button>
        <h3>AstroMatch</h3>
        <button>
          <img
            src="https://i.postimg.cc/xC0xtKYd/cruz.png"
            alt="X para limpar lista."
            width="30"
            onClick={limparLista}
          />
        </button>
      </HeaderMatch>
      <BodyMatch>{cardsPrint}</BodyMatch>
    </BoxTela>
  )
}
