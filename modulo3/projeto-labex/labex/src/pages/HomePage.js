import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { App, ButtonBasic, OrganizerButton } from './Styles'

export const TextFooter = styled.div`
  color: #f4511e;
  text-align: center;
  font-size: 15px;
  font-family: 'Montserrat', sans-serif;
  font-style: italic;
  margin: 0;
`

export const ImgHome = styled.div`
  img {
    height: 75vh;
  }
`

function HomePage() {
  const history = useHistory()
  const goToTrips = () => {
    history.push('/listTrips')
  }
  const goToAdm = () => {
    history.push('/applicationForm')
  }
  return (
    <App>
      <ImgHome>
        <img
          src="https://i.postimg.cc/fy6JJGwq/bcc0e0a27a7c4eaeee8ced86ed9e8c14-removebg-preview.png"
          alt="Imagem viagens"
        />
      </ImgHome>

      <OrganizerButton>
        <ButtonBasic onClick={goToTrips}>Ver viagens</ButtonBasic>
        <ButtonBasic onClick={goToAdm}>Login ADM</ButtonBasic>
      </OrganizerButton>

      <TextFooter>
        <p>“O fim de uma viagem é apenas o começo de outra.”</p>
      </TextFooter>
    </App>
  )
}

export default HomePage
