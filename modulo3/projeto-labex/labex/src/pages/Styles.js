import styled from 'styled-components'

export const App = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ButtonBasic = styled.div`
background-color: #f4511e;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  margin: 25px 25px;
  opacity: 0.6;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;

}
:hover{
  opacity: 1;
  }
`
export const OrganizerButton = styled.div`
  display: flex;
  justify-content: space-between;
`
