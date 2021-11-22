import React from 'react'
import { Header } from '../Styles'

export default class ReproduzirMusica extends React.Component {
  render() {
    return (
      <div>
        <Header>Ouça sua música!</Header>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${this.props.selectedId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    )
  }
}
