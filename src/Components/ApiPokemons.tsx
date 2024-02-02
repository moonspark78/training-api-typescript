import React, {useEffect, useState} from 'react'
import "./ApiPokemons.css"


type Pokemons = {
  name: string;
  url: string;
  image: string;
};


export const ApiPokemons = () => {
  const [pokemons, setPokemons] = useState<Pokemons[]>([])

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const data = await response.json();
        console.log(data.results);
        setPokemons(data.results);       
    
        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon : Pokemons) =>{
            const pokeResponse = await fetch(pokemon.url)
            const pokeData = await pokeResponse.json();
            return {
              name: pokemon.name,
              url: pokemon.url,
              image: pokeData.sprites.other.home.front_default,
            }
          })
          );
          setPokemons(pokemonDetails);
          
        }



    fetchData();
  },[]);







  return (
    <div className='pokemons'>
      <h2>ApiPokemons</h2>
      
      <input 
          placeholder="Searth the internet..." 
          type="text" 
          name="text" 
          className="input"
      />

      <div className='pokemonsCard'>
        {
            pokemons.map((pokemon, index) => (
              <div key={index}>
                <p>{pokemon.name}</p>
                <img src={pokemon.image} alt='image_pokemon'/>
              </div>
            ))
        }
      </div>
    </div>
  )
}
