import React, { useState } from 'react'
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

function CreateTripPage(props) {
  const [infoForm, setInfoForm] = useState({
    name: '',
    planet: '',
    date: '',
    description: '',
    durationInDays: ''
  })

  const history = useHistory()
  const goToHome = () => {
    history.push('/loginAdmin')
  }

  const handleNome = e => {
    setInfoForm({
      name: e.target.value
    })
  }

  const handlePlaneta = e => {
    setInfoForm({
      name: infoForm.name,
      planet: e.target.value
    })
  }

  const handleDate = e => {
    setInfoForm({
      name: infoForm.name,
      planet: infoForm.planet,
      date: e.target.value
    })
  }

  const handleInfo = e => {
    setInfoForm({
      name: infoForm.name,
      planet: infoForm.planet,
      date: infoForm.date,
      description: e.target.value
    })
  }

  const handleDias = e => {
    let diasConversor = Number(e.target.value)
    setInfoForm({
      name: infoForm.name,
      planet: infoForm.planet,
      date: infoForm.date,
      description: infoForm.description,
      durationInDays: diasConversor
    })
  }

  const postForm = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/kahena-mansano/trips`
    const dados = { ...infoForm }
    const body = {
      name: dados.name,
      planet: dados.planet,
      date: dados.date,
      description: dados.description,
      durationInDays: dados.durationInDays
    }
    axios
      .post(url, body, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: props
        }
      })
      .then(res => {
        alert('Viagem criada com sucesso!')
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
          <input
            type="text"
            placeholder="Nome da viagem"
            value={infoForm.name}
            onChange={handleNome}
          ></input>
          <input
            type="number"
            placeholder="Destino"
            value={infoForm.planet}
            onChange={handlePlaneta}
          ></input>
          <input
            type="text"
            placeholder="Data de embarque (ex: XX/XX/XXXX)"
            value={infoForm.date}
            onChange={handleDate}
          ></input>
          <input
            type="text"
            placeholder="Roteiro da viagem"
            value={infoForm.description}
            onChange={handleInfo}
          ></input>
          <input
            type="Number"
            placeholder="Duração"
            value={infoForm.durationInDays}
            onChange={handleDias}
          ></input>
        </form>
        <OrganizerButton>
          <ButtonBasic onClick={goToHome}>Voltar</ButtonBasic>
          <ButtonBasic onClick={postForm}>Criar viagem</ButtonBasic>
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

export default CreateTripPage
