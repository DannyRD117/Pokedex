import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Type from "../CardPokemon/Type";

import styles from "./PokemonDetails.module.css";

const PokemonDetails = () => {
  const { name } = useParams();
  const { data: pokemon, isLoading } = useFetch(name);

  const pokemonName = pokemon?.name;
  const imageUrl = pokemon?.sprites.other.home.front_default;
  const pokemonID = pokemon?.id;
  const pokemonHeight = pokemon?.height;
  const pokemonWeight = pokemon?.weight;

  const types = pokemon?.types.map((type) => type.type.name);

  const typesContent = types?.map((type) => (
    <Type className={styles[type]} key={type} name={type} />
  ));

  const statsContent = pokemon?.stats.map((stat) => {
    return (
      <p>
        <strong>{stat.stat.name}:</strong> {stat.base_stat}
      </p>
    );
  });

  return (
    <Fragment>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <article
          className={`${styles["pokemon-card"]} ${types && styles[types[0]]}`}
        >
          <section className={styles["pokemon-card__general-data"]}>
            <header className={styles["pokemon-card__header"]}>
              <h3 className={styles["pokemon-card__title"]}>{pokemonName}</h3>
              <p className={styles["pokemon-card__id"]}>{pokemonID}</p>
            </header>
            <img
              className={styles["pokemon-card__image"]}
              src={imageUrl}
              alt={pokemonName}
            />
            <div className={styles["pokemon-card__types"]}>{typesContent}</div>
          </section>

          <section className={styles["pokemon-card__stats"]}>
            <p>
              <strong>height:</strong>
              {pokemonHeight}
            </p>
            <p>
              <strong>weight:</strong>
              {pokemonWeight}
            </p>
            {statsContent}
          </section>
        </article>
      )}
    </Fragment>
  );
};

export default PokemonDetails;
