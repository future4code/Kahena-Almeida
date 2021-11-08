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
  state = {
    listaDePosts: [
      {
        nome: 'Paulinha',
        foto: 'https://picsum.photos/50/50',
        imagem: 'https://picsum.photos/200/150'
      },
      {
        nome: 'Patrícia',
        foto: 'https://picsum.photos/60/60',
        imagem: 'https://picsum.photos/210/150'
      },
      {
        nome: 'Joaquim',
        foto: 'https://picsum.photos/70/70',
        imagem: 'https://picsum.photos/220/150'
      }
    ]
  }

  render() {
    const printLista = this.state.listaDePosts.map(i => (
      <MainContainer>
        <Post nomeUsuario={i.nome} fotoUsuario={i.foto} fotoPost={i.imagem} />
      </MainContainer>
    ))
    return <div>{printLista}</div>
  }
}

export default App
