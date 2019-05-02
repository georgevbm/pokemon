import { HttpClient } from '@angular/common/http';
import { Injectable, TypeDecorator } from '@angular/core';
import { environment } from '../../environments/environment'

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
        return this.http.get(API + 'type/' + codType);
    }

    getPokemon(codPokemon: number){
        return this.http.get(API + 'pokemon/' + codPokemon);
    }
}
