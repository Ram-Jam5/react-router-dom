// src/components/PokemonDetails.jsx

import { useParams } from "react-router-dom";

const PokemonDetails = ({pokemon}) => {
    // const params = useParams()
        const { pokemonId } = useParams()
        const singlePokemon = pokemon.find((poke) => poke._id === Number(pokemonId))
    return (
      <>
        <h2>{singlePokemon.name}</h2>
        <dl>
          <dt>Weight:</dt>
          <dd>{singlePokemon.weight}</dd>
          <dt>Height:</dt>
          <dd>{singlePokemon.height}</dd>
        </dl>
      </>
    );
  };
  
  export default PokemonDetails;
  