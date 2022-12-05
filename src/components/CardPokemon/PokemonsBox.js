import React from "react";
import CardPokemon from "./CardPokemon";
import styles from "./PokemonsBox.module.css";

const PokemonsBox = (props) => {
  const pokemons = props.pokemons;
  return (
    <div className={styles["pokemon-box"]}>
      {pokemons?.results.map((pokemon) => (
        <CardPokemon key={pokemon.name} name={pokemon.name} />
      ))}
    </div>
  );
};

export default PokemonsBox;
