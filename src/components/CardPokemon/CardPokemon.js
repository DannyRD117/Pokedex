import React, { Fragment } from "react";
import { useFetch } from "../../hooks/useFetch";
import Type from "./Type";

import styles from "./CardPokemon.module.css";

const CardPokemon = (props) => {
  const { data: pokemon, isLoading, error } = useFetch(props.name);

  const pokemonName = pokemon?.name;
  const imageUrl = pokemon?.sprites.other.home.front_default;
  const pokemonID = pokemon?.id;
  const types = pokemon?.types.map((type) => type.type.name);

  return (
    <Fragment>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div
          className={`${styles[`pokemon-card`]} ${types && styles[types[0]]}`}
        >
          <h3 className={styles["pokemon-card__name"]}>{pokemonName}</h3>
          <p className={styles["pokemon-card__number"]}>N° {pokemonID}</p>
          <div>
            <img
              className={styles["pokemon-card__image"]}
              src={imageUrl}
              alt={pokemonName}
            ></img>
          </div>
          <Type />
        </div>
      )}
    </Fragment>
  );
};

export default CardPokemon;
