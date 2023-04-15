import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const PokemonSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const PokemonSearchInput = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
`;

const PokemonSearchButton = styled.button`
  padding: 10px;
  background-color: rgb(255 204 1);
  border: none;
  color: rgb(109 112 114);
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: rgb(200 161 2);
  }
`;

const PokemonImage = styled.img`
  width: 200px;
  height: 200px;
`;

const PokemonSearch = () => {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      setPokemonData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PokemonSearchContainer>
      <PokemonSearchInput type="text" placeholder="Pokémon keresése..." value={pokemonName} onChange={(event) => setPokemonName(event.target.value)} />
      <PokemonSearchButton onClick={handleSearch}>Keresés</PokemonSearchButton>
      {pokemonData && (
        <div>
          <PokemonImage src={pokemonData.sprites.front_default}/>          
          <h2>{pokemonData.name}</h2>
        </div>
      )}
    </PokemonSearchContainer>
  );
};

export default PokemonSearch;
