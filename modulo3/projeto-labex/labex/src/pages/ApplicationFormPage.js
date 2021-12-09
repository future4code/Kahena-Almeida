import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { ButtonBasic } from './Styles'
import styled from 'styled-components'

const OrganizerButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const OrganizerPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  form {
    color: #f4511e;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50vh;
    width: 100vw;
    padding: 0;
    margin: 0;
  }
  select {
    display: flex;
    height: 25px;
    width: 60vw;
    color: #f4511e;
    font-family: 'Montserrat', sans-serif;
    border: 1px #f4511e;
    margin-bottom: 10px;
  }
  input {
    display: flex;
    height: 25px;
    width: 60vw;
    color: #f4511e;
    font-family: 'Montserrat', sans-serif;
    border-bottom: 1px #f4511e;
    margin-bottom: 10px;
  }
`

const ImgForm = styled.div`
  display: flex;
  justify-content: center;
`

function ApplicationForm() {
  const [infoForm, setInfoForm] = useState({
    name: '',
    age: '',
    int: '',
    prof: '',
    nac: ''
  })
  const [cardsList, setCardsList] = useState([])
  const history = useHistory()

  const goToHome = () => {
    history.push('/')
  }

  const handleNome = e => {
    setInfoForm({
      name: e.target.value
    })
  }

  const handleAge = e => {
    let ageConversor = Number(e.target.value)
    setInfoForm({
      name: infoForm.name,
      age: ageConversor
    })
  }

  const handleInt = e => {
    setInfoForm({
      name: infoForm.name,
      age: infoForm.age,
      int: e.target.value
    })
  }

  const handleProf = e => {
    setInfoForm({
      name: infoForm.name,
      age: infoForm.age,
      int: infoForm.int,
      prof: e.target.value
    })
  }

  const handleNac = e => {
    setInfoForm({
      name: infoForm.name,
      age: infoForm.age,
      int: infoForm.int,
      prof: infoForm.prof,
      nac: e.target.value
    })
  }

  useEffect(() => {
    showList()
  }, [])

  const showList = () => {
    axios
      .get(
        'https://us-central1-labenu-apis.cloudfunctions.net/labeX/kahena-carvers/trips'
      )
      .then(res => {
        setCardsList(res.data.trips)
      })
      .catch(err => {
        console.log(err, 'Erro get list')
        alert('Houve algum erro, tente novamente.')
      }, [])
  }

  const postForm = () => {
    let id = 'id' + new Date().getTime()
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/kahena-carvers/trips/${id}/apply`
    const dados = { ...infoForm }
    const body = {
      name: dados.name,
      age: dados.age,
      applicationText: dados.int,
      profession: dados.prof,
      country: dados.nac
    }
    axios
      .post(url, body, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        alert('Inscrição efetuada com sucesso!')
      })
      .catch(err => {
        console.log(err, 'Erro get list')
        alert('Houve algum erro, tente novamente.')
      }, [])
  }

  return (
    <div>
      <OrganizerPage>
        <form>
          <select placeholder="Qual excursão te interessou?">
            {cardsList ? (
              cardsList.map(item => {
                return (
                  <option key={item.id} value="{item.name}">
                    {item.name}
                  </option>
                )
              })
            ) : (
              <p>Carregando...</p>
            )}
          </select>
          <input
            type="text"
            placeholder="Seu nome"
            value={infoForm.name}
            onChange={handleNome}
          ></input>
          <input
            type="number"
            placeholder="Sua idade"
            value={infoForm.age}
            onChange={handleAge}
          ></input>
          <input
            type="text"
            placeholder="Fale mais sobre você, seus interesses..."
            value={infoForm.int}
            onChange={handleInt}
          ></input>
          <input
            type="text"
            placeholder="Qual sua profissão?"
            value={infoForm.prof}
            onChange={handleProf}
          ></input>
          <input
            type="text"
            placeholder="Sua nacionalidade"
            value={infoForm.nac}
            onChange={handleNac}
          ></input>
        </form>
        <OrganizerButton>
          <ButtonBasic onClick={goToHome}>Voltar</ButtonBasic>
          <ButtonBasic onClick={postForm}>Inscrever-me</ButtonBasic>
        </OrganizerButton>
        <ImgForm>
          <img
            width="250px"
            src="https://i.postimg.cc/tCqBR81C/istockphoto-1026535190-170667a-removebg-preview.png"
            alt="Mala de viagem."
          />
        </ImgForm>
      </OrganizerPage>
    </div>
  )
}

export default ApplicationForm
