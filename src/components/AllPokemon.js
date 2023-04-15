import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const PokemonDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(10, auto);
  row-gap: 20px;
  column-gap: 20px;
  grid-template-areas:
    "title title"
    "list list";
  justify-items: center;
`;

const Title = styled.h1`
  grid-area: title;
  margin-top: 100px;
`;

const List = styled.ul`
  grid-area: list;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Img = styled.img`
    width: 96px;
    height: 96px;
`

const AllPokemon = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(response => {
        setPokemonList(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const [pokemonSprites, setPokemonSprites] = useState({});

  useEffect(() => {
    pokemonList.forEach(pokemon => {
      axios.get(pokemon.url)
        .then(response => {
          const spriteUrl = response.data.sprites.front_default;
          setPokemonSprites(prevState => ({ ...prevState, [pokemon.name]: spriteUrl }));
        })
        .catch(error => {
          console.error(error);
        });
    });
  }, [pokemonList]);

  return (
    <PokemonDiv>
      <Title>Összes Pokémon</Title>
        <List>
            {pokemonList.map(pokemon => (
                <li key={pokemon.name}>
                <h2>{pokemon.name}</h2>
                <Img src={pokemonSprites[pokemon.name]} id={`img-${pokemon.name}`} />
                <p><a href={pokemon.url} target="_blank" rel="noreferrer">{pokemon.url}</a></p>
                </li>
            ))}
        </List>
    </PokemonDiv>
  );
};

export default AllPokemon;
