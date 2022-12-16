import type { PageLoad } from './$types';
import type { PokemonResponse } from '../types/PokemonResponse';
import type { PokemonAbilityResponse } from '../types/PokemonAbilityResponse';
export const load = (async ({ fetch }) => {
  const getAllIdAndNames = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=300');
    const pokemonsData = (await res.json()) as PokemonResponse;

    return pokemonsData.results.map((pok) => {
      const id = pok.url.split('/')[6];
      return {
        id,
        name: pok.name,
      };
    });
  };

  const data = await getAllIdAndNames();

  const pokemons = data.map(async (pok) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pok.id}`);
    const pokemonData = (await res.json()) as PokemonAbilityResponse;

    return {
      id: pok.id,
      name: pok.name,
      img: pokemonData.sprites.other?.dream_world.front_default,
    };
  });

  return {
    pokemons: Promise.all(pokemons),
  };
}) satisfies PageLoad;
