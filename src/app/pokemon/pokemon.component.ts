import { Component, OnInit } from '@angular/core';
import { PokemonAPIService } from '../service/pokemon-api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemons$: Observable<Object[]>;
  pokemon: Pokemon;

  constructor(private pokemonService: PokemonAPIService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    this.activatedRoute.params.subscribe(params => {
      this.pokemons$ = this.pokemonService.getPokemonsType(params.idType);
    });
  }

  savePokemon(url: string) {
    this.pokemonService.getPokemon(this.extractIdUrl(url))
      .subscribe(data => {
        let abilities: string[] = [];
        data['abilities'].forEach(ability => {
          abilities.push(ability['ability']['name']);
        })

        let types: string[] = [];
        data['types'].forEach(type => {
          types.push(type['type']['name']);
        });

        this.pokemon = {
          abilities, height: data['height'],
          id: data['id'],
          name: data['name'],
          sprite: data['sprites']['front_default'],
          types,
          weight: data['weight']
        }
      });

  }

  private refactorNamePokemon(name: string) {
    let newName;

    if (name.includes("-")) {
      let nameSplit = name.split("-");
      nameSplit.forEach(partName => {
        if (!newName) {
          newName = this.firstLetterUpper(partName);
        } else {
          newName = newName + " " + this.firstLetterUpper(partName);
        }
      });
    } else {
      newName = this.firstLetterUpper(name);
    }

    return newName;
  }

  private firstLetterUpper(word: string) {
    let firstLetter = word[0];
    let newWord = firstLetter.toUpperCase() + word.slice(1);
    return newWord;
  }

  private extractIdUrl(url: string) {
    return parseInt(url.substr(url.length - 6).replace(/[^\d]+/g, ''));
  }

}
