import { Pokemon } from '../pokemon/pokemon';

export interface PokemonType {
    idType: number;
    name: string;
    url: string;
    pokemons?: Pokemon[];
    medal?: string;
}