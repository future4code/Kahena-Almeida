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
    nomeUsuario: '',
    fotoUsuario: '',
    fotoPost: '',

    listaDePosts: [
      {
        id: Math.random(),
        nomeUsuario: 'Paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        id: Math.random(),
        nomeUsuario: 'Patrícia',
        fotoUsuario: 'https://picsum.photos/60/60',
        fotoPost: 'https://picsum.photos/210/150'
      },
      {
        id: Math.random(),
        nomeUsuario: 'Joaquim',
        fotoUsuario: 'https://picsum.photos/70/70',
        fotoPost: 'https://picsum.photos/220/150'
      }
    ]
  }

  enviarPost = event => {
    event.preventDefault()
    const { nomeUsuario, fotoUsuario, fotoPost } = this.state
    const novaLista = [...this.state.listaDePosts]
    novaLista.push({ nomeUsuario, fotoUsuario, fotoPost, id: Math.random() })
    this.setState({ listaDePosts: novaLista })
  }

  onChangeNome = event => {
    this.setState({ nomeUsuario: event.target.value })
  }
  onChangeFotoUsuario = event => {
    this.setState({ fotoUsuario: event.target.value })
  }
  onChangeFotoPost = event => {
    this.setState({ fotoPost: event.target.value })
  }

  render() {
    const printLista = this.state.listaDePosts.map(i => (
      <MainContainer key={i.id}>
        <Post
          nomeUsuario={i.nomeUsuario}
          fotoUsuario={i.fotoUsuario}
          fotoPost={i.fotoPost}
        />
      </MainContainer>
    ))
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Nome do usuário"
            value={this.state.nomeUsuario}
            onChange={this.onChangeNome.bind(this)}
          />
          <input
            type="text"
            placeholder="Foto usuário"
            value={this.state.fotoUsuario}
            onChange={this.onChangeFotoUsuario.bind(this)}
          />
          <input
            type="text"
            placeholder="Foto post"
            value={this.state.fotoPost}
            onChange={this.onChangeFotoPost.bind(this)}
          />
          <button onClick={this.enviarPost.bind(this)}>Enviar</button>
        </form>
        {printLista}
      </div>
    )
  }
}

export default App
