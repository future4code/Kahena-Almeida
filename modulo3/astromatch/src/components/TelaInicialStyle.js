import styled from 'styled-components'

export const BoxTela = styled.div`
  height: 95vh;
  width: 25vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 35px;
  box-shadow: 0 0 1em black;
  p {
    margin-top: 8vh;
    font-family: 'Quicksand', sans-serif;
    color: red;
    font-size: 25px;
  }
  button {
    font-size: 15px;
    font-family: 'Quicksand', sans-serif;
    width: 15vw;
    height: 5vh;
    border-width: 1px;
    color: #fff;
    border-color: rgba(195, 138, 138, 1);
    font-weight: bold;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    box-shadow: 0px 10px 14px -7px rgba(115, 39, 39, 1);
    text-shadow: 0px 1px 0px rgba(138, 61, 61, 1);
    background: linear-gradient(rgba(218, 136, 136, 1), rgba(195, 39, 39, 1));
    :hover {
      background: linear-gradient(rgba(195, 39, 39, 1), rgba(218, 136, 136, 1));
    }
  }
`
export const ImgLogo = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  width: 30vw;
  margin-top: 0vh;
  margin-bottom: 2vh;
`

export const ImgSombra = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0;
`
