import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';
import { getPokemon, getAllPokemon } from '../Components/Pokemon';
import '../App.css';


function Lista() {
  const [pokemonData, setPokemonData] = useState([])
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialURL = 'https://pokeapi.co/api/v2/pokemon/?limit=25'

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialURL)
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, [])

  
  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon)
      return pokemonRecord
    }))
    setPokemonData(_pokemonData);
  }

  return (
    <>
   
      <div>
        {loading ? <h1 style={{ textAlign: 'center' }}>Loading...</h1> : (
          <>
           
            <div className="grid-container">
              {pokemonData.map((pokemon, i) => {
                return <Card key={i} pokemon={pokemon} />
              })}
            </div>
           
          </>
        )}
      </div>
    </>
  );
}

export default Lista;
