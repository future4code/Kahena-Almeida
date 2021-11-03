import React from 'react'
import './App.css'
import CardPequeno from './components/CardPequeno/CardPequeno'
import CardGrande from './components/CardGrande/CardGrande'
import ImagemButton from './components/ImagemButton/ImagemButton'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://i.postimg.cc/XJbGYDnt/1633108326723.jpg"
          nome="Kahena"
          descricao="Olá, me chamo Kahena. Sou estudante do curso Full Stack da Labenu. E estou amando!"
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />

        <CardPequeno
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvre27d9sgAylyhkFBG8qn2S_ZMEmq8jR-aw&usqp=CAU"
          nome="E-mail: "
          descricao="kahenamansanomansano@gmail.com"
        />

        <CardPequeno
          imagem="https://png.pngtree.com/png-vector/20190826/ourlarge/pngtree-house-location-icon-png-image_1701248.jpg"
          nome="Endereço: "
          descricao="Campo Grande/MS"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Até chegar aqui..."
          descricao="Como a maioria das pessoas que conheci no curso, o caminho foi cheio de experiências até conhecer a área de tecnologia, que pra mim aconteceu em 2019 quando fui pra SP trabalhar em startups na minha área de formação anterior... arquitetura."
        />

        <CardGrande
          imagem="http://varandas-hostel-rua-bananeiras-251-em-frente-a-praa-da.hotels-joao-pessoa.com/data/Photos/r1920x1080/5468/546862/546862140.JPEG"
          nome="A melhor experiência"
          descricao="Acredito que tenha sido a aventura de empreender, acho que todo mundo devia viver em algum momento essa experiência, por nos desenvolver em tantos aspectos... não que eu sinta saudades das jornadas de mais de 10hrs de trabalho kkk mais sinto saudade, foi um período incrível e agradeço por tudo que me agregou."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  )
}

export default App
