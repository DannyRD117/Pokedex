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

  const typesContent = types?.map((type) => (
    <Type className={styles[type]} name={type} />
  ));
  return (
    <Fragment>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <article
          className={`${styles[`pokemon-card`]} ${types && styles[types[0]]}`}
        >
          <div className={styles["pokemon-card__header"]}>
            <h3 className={styles["pokemon-card__name"]}>{pokemonName}</h3>
            <p className={styles["pokemon-card__number"]}>N° {pokemonID}</p>
          </div>
          <div>
            <img
              className={styles["pokemon-card__image"]}
              src={imageUrl}
              alt={pokemonName}
            ></img>
          </div>
          <div className={styles["pokemon-card__types"]}>{typesContent}</div>
        </article>
      )}
    </Fragment>
  );
};

export default CardPokemon;
