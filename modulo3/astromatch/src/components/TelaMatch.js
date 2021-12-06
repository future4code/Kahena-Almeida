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
  justify-content: flex-start;
  border-radius: 35px;
  box-shadow: 0 0 1em black;
`
const HeaderMatch = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin-top: 15px;
  margin-bottom: 5px;
  justify-content: space-between;
  height: 10vh;
  width: 25vw;
  border-bottom: 1px solid #e4e4e4;
  h3 {
    display: flex;
    margin-top: 3px;
    margin-bottom: 0;
    margin-left: 7px;
    font-family: 'Quicksand', sans-serif;
    color: red;
    font-size: 25px;
    align-items: center;
  }
  img {
    margin-bottom: 0;
    display: flex;
    margin-top: 17px;
    margin-right: 7px;
    height: 5vh;
    cursor: pointer;
  }
`

const BodyMatch = styled.div``

const CardMatch = styled.div`
  box-shadow: 0 0 1em black;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  height: 65vh;
  width: 20vw;
  img {
    height: 45vh;
    width: 20vw;
  }
  h3 {
    margin-top: 2px;
    margin-bottom: 2px;
    font-family: 'Quicksand', sans-serif;
    color: red;
    font-size: 18px;
    margin-left: 2px;
  }
  p {
    margin-top: 4px;
    margin-bottom: 2px;
    margin-left: 2px;
    font-family: 'Quicksand', sans-serif;
    color: red;
    font-size: 15px;
  }
`
const BotoesRodape = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  cursor: pointer;
  margin-left: 10px;
  margin-right: 10px;
`

export default function TelaMatch(props) {
  // const [novoPerfil, setnovoPerfil] = useState({})
  // const [proximo, setProximo] = useState(0)
  const [novoPerfil, setnovoPerfil] = useState({})
  const [perfilClicado, setperfilClicado] = useState('')
  const [perfilEscolhido, setperfilEscolhido] = useState('')

  useEffect(() => {
    addPerfilPrint()
  }, [perfilEscolhido])

  const addPerfilPrint = () => {
    const nomeAluno = 'kahena-carvers'
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${nomeAluno}/person`
      )
      .then(response => {
        const novoPerfilPrint = response.data.profile
        setnovoPerfil(novoPerfilPrint)
        const idPerfil = response.data.profile.id
        setperfilClicado(idPerfil)
      })
      .catch(err => {
        alert(err)
      })
  }

  console.log(novoPerfil, 'foi setado o novo perfil?')

  const addEstado = () => {
    let perfilAtual = perfilClicado
    setperfilEscolhido(perfilAtual)
    addPerfilMatch(perfilEscolhido)
  }

  const addPerfilMatch = idPerfil => {
    const nomeAluno = 'kahena-carvers'
    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${nomeAluno}/choose-person`
    const body = {
      id: idPerfil,
      choice: true
    }
    axios
      .post(url, body, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        alert('Será que vai dar match? ❤')
        console.log(res)
      })
      .catch(err => {
        alert('Não foi curtido...verificar.')
        console.log(err)
      })
  }

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
          <img src={novoPerfil.photo} alt="Imagem do perfil do usuário." />
          <h3>
            {novoPerfil.name}, {novoPerfil.age}
          </h3>
          <p>{novoPerfil.bio}</p>
        </CardMatch>
        <BotoesRodape>
          <img
            src="https://i.postimg.cc/xC0xtKYd/cruz.png"
            alt="Passar para próximo."
            width="30"
            onClick={addPerfilPrint}
          />

          <img
            src="https://i.postimg.cc/sgQth9Dd/de-coracao.png"
            alt="Icone de adicionar na lista de matchs."
            width="30"
            onClick={addEstado}
          />
        </BotoesRodape>
      </BodyMatch>
    </BoxTela>
  )
}
