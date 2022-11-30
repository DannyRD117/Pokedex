import React from "react";

import styles from "./Navbar.module.css";
import pokeballLogo from "../../assets/images/logo.png";
import searchIcon from "../../assets/icons/search.svg";
import Input from "../UI/Input";
import Button from "../UI/Button";

const Navbar = () => {
  const searchHandle = (event) => {
    event.preventDeafault();
  };

  return (
    <nav className={styles.navbar}>
      <img
        className={styles.navbar__logo}
        src={pokeballLogo}
        alt="Pokeball logo"
      />
      {/* <h1 className={styles.navbar__title}>Pokedex</h1> */}
      <form className={styles["search-field"]} onSubmit={searchHandle}>
        <Input
          className={styles["search-field__input"]}
          placeholder="Search pokemon..."
        />
        <Button className={styles["search-field__action"]}>
          <img
            className={styles.navbar__icon}
            src={searchIcon}
            alt="search icon"
          ></img>
        </Button>
      </form>
      <ul className={styles.navbar__links}>
        <li>All pokemons</li>
      </ul>
    </nav>
  );
};

export default Navbar;
