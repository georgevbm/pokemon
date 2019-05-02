import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonAPIService } from 'src/app/service/pokemon-api.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  pokemon: Pokemon;

  constructor(private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonAPIService) { }

  ngOnInit() {
    this.getPokemon()
  }

  getPokemon() {
    this.activatedRoute.params.subscribe(params => {
      this.pokemonService.getPokemon(params['idPokemon'])
        .subscribe(data => {
          let abilities: string[] = [];
          data['abilities'].filter(ability => !!ability).forEach(ability => {
            abilities.push(this.refactorNames(ability['ability']['name']));
          });
          let height: number = data['height'] / 10;
          let id: number = data['id'];
          let name: string = this.refactorNames(data['name']);
          let sprite: string = data['sprites']['front_default'];
          let types: string[] = [];
          data['types'].filter(type => !!type).forEach(type => {
            types.push(this.refactorNames(type['type']['name']));
          });
          let weight: number = data['weight'] / 10;

          let p: Pokemon = { abilities, height, id, name, sprite, types, weight }
          this.pokemon = p;
        });
    });
  }

  getTypes(types: string[]){
    return types.join(', ');
  }

  private refactorNames(name: string) {
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
