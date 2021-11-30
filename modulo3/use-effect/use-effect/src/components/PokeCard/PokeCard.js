import { useEffect, useState } from 'react'
import axios from 'axios'

export default function PokeCard({ pokeName }) {
  const [pokemon, setPokemon] = useState({})

  function pegaPokemon() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        setPokemon(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(pegaPokemon, [pokeName])

  return (
    <div>
      <p>{pokemon.name}</p>
      <p>{pokemon.weight} Kg</p>
      {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </div>
  )
}
