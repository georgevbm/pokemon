import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { Pokemon } from '../pokemon/pokemon';

const API = environment.apiUrl;

@Injectable({
    providedIn: 'root'
})
export class PokemonAPIService {
    constructor(private http: HttpClient) { }

    getAllTypes(){
        return this.http.get<Object[]>(API + 'type');
    }

    getPokemonsType(codType: number) {
        return this.http.get<Object[]>(API + 'type/' + codType);
    }

    getPokemon(codPokemon: number){
        return this.http.get<Pokemon>(API + 'pokemon/' + codPokemon);
    }
}
