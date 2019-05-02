import { Pokemon } from '../pokemon/pokemon';

export interface TypePokemon {
    idType: number;
    name: string;
    url: string;
    pokemons?: Pokemon[];
}