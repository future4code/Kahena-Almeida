import styled from 'styled-components'

export const AreaTotal = styled.div`
  margin: 0;
  padding: 0;
  background-color: #282c34;
  max-width: 100vw;
  min-width: 100vw;
  min-height: 100vh;
  max-height: 100vh;
  input {
    border: 1px;
    background: transparent;
    outline: 0;
    color: white;
    font-size: 18px;
    flex: 1;
    border-bottom: 1px solid #444;
    text-align: center;
    margin-bottom: 10px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: white;
    text-align: center;
  }
`

export const Header = styled.h1`
  color: #fff;
  background-color: #282c34;
  text-align: center;
  border-bottom: 1px solid #444;
  padding-bottom: 10px;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const CardItem = styled.li`
  border: 1px solid white;
  padding: 10px;
  margin: 10px;
  width: 150px;
  display: grid;
  grid-template-columns: 100px 1fr 1fr 1fr;
  justify-content: space-between;
`

export const Colunas = styled.ul`
  max-width: 100vw;
  max-height: 70vh;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
`

export const AdcionarMusica = styled.div`
  max-width: 100vw;
  max-height: 70vh;
  display: grid;
  grid-gap: 10px;
  grid-row-start: 1fr 1fr 1fr;
  justify-content: space-between;
`
