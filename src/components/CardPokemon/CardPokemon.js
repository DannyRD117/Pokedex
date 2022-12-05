import React, { Fragment } from "react";
import { useFetch } from "../../hooks/useFetch";
import Type from "./Type";

import styles from "./CardPokemon.module.css";
import { useNavigate } from "react-router-dom";

const CardPokemon = (props) => {
  const { data: pokemon, isLoading, error } = useFetch(props.name);
  const navigate = useNavigate();

  const pokemonName = pokemon?.name;
  const imageUrl = pokemon?.sprites.other.home.front_default;
  const pokemonID = pokemon?.id;
  const types = pokemon?.types.map((type) => type.type.name);

  const detailsHandler = () => {
    navigate(`pokemon/${pokemonName}`);
  };

  const typesContent = types?.map((type) => (
    <Type className={styles[type]} key={type} name={type} />
  ));

  return (
    <Fragment>
      {!isLoading && (
        <article
          className={`${styles[`pokemon-card`]} ${types && styles[types[0]]}`}
          onClick={detailsHandler}
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
