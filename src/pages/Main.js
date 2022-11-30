import CardPokemon from "../components/CardPokemon/CardPokemon";
import PokemonsBox from "../components/CardPokemon/PokemonsBox";
import { useFetch } from "../hooks/useFetch";

const Main = () => {
  const { data: pokemons, isLoading, error } = useFetch();
  const content = isLoading ? (
    <p>Loading ..</p>
  ) : (
    <PokemonsBox pokemons={pokemons} />
  );
  return <div>{content}</div>;
};

export default Main;
