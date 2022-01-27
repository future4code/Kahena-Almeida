import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { axios } from 'axios'
import { useHistory } from 'react-router-dom'
import { App, ButtonBasic, OrganizerButton } from './Styles'

const Text = styled.div`
  color: #f4511e;
  text-align: center;
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  margin: 0;
`

export const ImgLogin = styled.div`
  img {
    height: 75vh;
  }
`

function LoginAdminPage() {
  const [emailInput, SetEmailInput] = useState('')
  const [senhaInput, SetSenhaInput] = useState('')
  const [tokenRecebido, SetTokenRecebido] = useState('')
  const [cardsList, setCardsList] = useState([])

  const history = useHistory()
  const goToHome = () => {
    history.push('/')
  }

  //------------------------------------------------TESTAR!
  const goToCreateTrip = token => {
    history.push('/')
  }

  const handleEmail = e => {
    SetEmailInput(e.target.value)
  }

  const handleSenha = e => {
    SetSenhaInput(e.target.value)
  }

  useEffect(() => {
    primeiroAcesso()
  }, [])

  const primeiroAcesso = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/kahena-mansano/signup`
    const body = {
      email: emailInput,
      password: senhaInput
    }
    axios
      .post(url, body, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        console.log(res.data)
        alert('Cadastro efetuado com sucesso! Clique apenas em logar agora 🎉')
      })
      .catch(err => {
        console.log(err, 'Erro get list')
        alert('Houve algum erro, tente novamente.')
      }, [])
  }

  useEffect(() => {
    logar()
  }, [])

  const logar = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/kahena-mansano/login`
    const body = {
      email: emailInput,
      password: senhaInput
    }
    axios
      .post(url, body, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        SetTokenRecebido(res.data.token)
      })
      .catch(err => {
        console.log(err, 'Erro get list')
        alert('Houve algum erro, tente novamente.')
      }, [])
  }

  useEffect(() => {
    showList()
  }, [])

  const showList = () => {
    axios
      .get(
        'https://us-central1-labenu-apis.cloudfunctions.net/labeX/kahena-mansano/trips'
      )
      .then(res => {
        setCardsList(res.data.trips)
      })
      .catch(err => {
        console.log(err, 'Erro get list')
        alert('Houve algum erro, tente novamente.')
      }, [])
  }

  return (
    <div>
      {tokenRecebido === '' ? (
        <App>
          <ImgLogin>
            <img
              src="https://i.postimg.cc/L591bj7V/artigos-de-viagem-para-o-dia-mundial-do-turismo-23-2147571223-removebg-preview.png"
              alt="Desenho com planeta, avião, passaport, remetendo a viajar o mundo!"
            />
          </ImgLogin>

          <form>
            <input
              type="text"
              placeholder="Seu email"
              value={emailInput}
              onChange={handleEmail}
            ></input>
            <input
              type="text"
              placeholder="Sua senha"
              value={senhaInput}
              onChange={handleSenha}
            ></input>
          </form>

          <OrganizerButton>
            <ButtonBasic onClick={goToHome}>Voltar</ButtonBasic>
            <ButtonBasic onClick={primeiroAcesso}>Primeiro acesso?</ButtonBasic>
            <ButtonBasic onClick={logar}>Login ADM</ButtonBasic>
          </OrganizerButton>
        </App>
      ) : (
        <App>
          <OrganizerButton>
            <ButtonBasic onClick={goToHome}>Home</ButtonBasic>
            <ButtonBasic onClick={() => goToCreateTrip(tokenRecebido)}>
              Criar nova excursão
            </ButtonBasic>
            <ButtonBasic onClick={logout}>Logout</ButtonBasic>
          </OrganizerButton>

          <Text>
            <h3>Excursões ativas:</h3>
          </Text>
          <OrganizerList>
            {cardsList ? (
              cardsList.map(item => {
                return (
                  <CardItem key={item.id}>
                    <h2>{item.name}</h2>
                    <ButtonBasic onClick={maisInfo}>+</ButtonBasic>
                    <ButtonBasic onClick={excluirViagem}>x</ButtonBasic>
                  </CardItem>
                )
              })
            ) : (
              <p>Carregando...</p>
            )}
          </OrganizerList>
        </App>
      )}
    </div>
  )
}

export default HomePage
