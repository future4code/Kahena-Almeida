import styled from 'styled-components'

export const AreaTotal = styled.div`
  margin: 0;
  padding: 0;
  background-color: #282c34;
  max-width: 100vw;
  min-width: 100vw;
  min-height: 100vh;
  max-height: 100vh;
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
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
