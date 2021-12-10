import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ButtonBasic, OrganizerButton } from './Styles'
import styled from 'styled-components'
import axios from 'axios'

const Text = styled.div`
  color: #f4511e;
  text-align: center;
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  margin: 0;
`

const CardItem = styled.div`
  background-color: #f4511e;
  color: white;
  opacity: 0.8;
  font-size: 15px;
  font-weight: normal;
  text-align: left;
  font-family: 'Montserrat', sans-serif;
  border: 1px solid white;
  padding: 10px;
  margin: 10px;
  width: 40vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  box-shadow: rgb(0 0 0 / 30%) 0px 4px 8px 0px;
`
const OrganizerList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function ListTrips() {
  const [cardsList, setCardsList] = useState([])
  const history = useHistory()

  const goToHome = () => {
    history.push('/')
  }

  const goToForm = () => {
    history.push('/applicationForm')
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
      <OrganizerButton>
        <ButtonBasic onClick={goToHome}>Voltar</ButtonBasic>
        <ButtonBasic onClick={goToForm}>Inscrever-me</ButtonBasic>
      </OrganizerButton>
      <Text>
        <h3>Escolha sua excursão e inscreva-se!</h3>
      </Text>
      <OrganizerList>
        {cardsList ? (
          cardsList.map(item => {
            return (
              <CardItem key={item.id}>
                <h2>{item.name}</h2>
                <h3>Detalhes: {item.description}</h3>
                <h3>Destino: {item.planet}</h3>
                <h3>Duração: {item.durationInDays} dias</h3>
                <h3>Data de embarque: {item.date}</h3>
              </CardItem>
            )
          })
        ) : (
          <p>Carregando...</p>
        )}
      </OrganizerList>
    </div>
  )
}

export default ListTrips
