import { Component, OnInit } from '@angular/core';
import { PokemonAPIService } from '../service/pokemon-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  titleType: string;
  pokemons: { id: number, name: string }[] = [];


  constructor(private pokemonService: PokemonAPIService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    this.activatedRoute.params.subscribe(params => {
      const idType = params.idType;
      this.pokemonService.getPokemonsType(idType)
        .subscribe(data => {
          let pokemonsAux = data['pokemon'];
          this.titleType = this.firstLetterUpper(data['name']);

          pokemonsAux.forEach(pokemon => {
            let id = this.extractIdUrl(pokemon['pokemon']['url']);
            let name = this.refactorNamePokemon(pokemon['pokemon']['name']);

            this.pokemons.push({id, name});
          });
        });
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
