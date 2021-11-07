import React from 'react'
import styled from 'styled-components'
import Post from './components/Post/Post'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <div>
        <MainContainer>
          <Post
            nomeUsuario={'Paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
        </MainContainer>
        <MainContainer>
          <Post
            nomeUsuario={'Patrícia'}
            fotoUsuario={'https://picsum.photos/60/60'}
            fotoPost={'https://picsum.photos/210/150'}
          />
        </MainContainer>
        <MainContainer>
          <Post
            nomeUsuario={'Joaquim'}
            fotoUsuario={'https://picsum.photos/70/70'}
            fotoPost={'https://picsum.photos/220/150'}
          />
        </MainContainer>
      </div>
    )
  }
}

export default App
