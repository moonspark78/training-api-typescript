import React, {useEffect, useState} from 'react'
import "./ApiPokemons.css"


type Pokemons = {
  name: string;
  sprites: {
    other: {
      home: {
        front_default: string;
      };
    };
  };
};

export const ApiPokemons = () => {
  const [pokemons, setPokemons] = useState<Pokemons[]>([])

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const data = await response.json();
        console.log(data.results);
        setPokemons(data.results);
        
    };
    fetchData();
  },[]);





  return (
    <div className='pokemons'>
      <h2>ApiPokemons</h2>
      <div className='pokemonsCard'>
        {
            pokemons.map((pokemon) => (
              <div>
                <p>{pokemon.name}</p>
              </div>
            ))
        }
      </div>
    </div>
  )
}
