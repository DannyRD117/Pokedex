import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const PokemonDetails = () => {
  const { name } = useParams();
  const { data: pokemon, isLoading, error } = useFetch(name);

  const pokemonName = pokemon?.name;
  const imageUrl = pokemon?.sprites.other.home.front_default;
  const pokemonID = pokemon?.id;
  const pokemonHeight = pokemon?.height;
  const pokemonWeight = pokemon?.weight;

  const statsContent = pokemon?.stats.map((stat) => {
    return (
      <p>
        {stat.stat.name}: {stat.base_stat}
      </p>
    );
  });
  return (
    <Fragment>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h3>{pokemonName}</h3>
          <p>{pokemonID}</p>
          <img src={imageUrl} />
          <p>{pokemonHeight}</p>
          <p>{pokemonWeight}</p>
          {statsContent}
        </div>
      )}
    </Fragment>
  );
};

export default PokemonDetails;
