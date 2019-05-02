import { Component, OnInit } from '@angular/core';
import { PokemonAPIService } from '../service/pokemon-api.service';
import { PokemonType } from './pokemon-type';
import { Router } from '@angular/router';
import { PokemonMedalEnum } from './pokemon-medal.enum';
import { PokemonTypeEnum } from './pokemon-type.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  types: PokemonType[] = [];

  constructor(private pokemonService: PokemonAPIService,
    private router: Router) { }

  ngOnInit() {
    this.getTypes();
    console.log(this.types);
  }

  getTypes() {
    this.pokemonService.getAllTypes()
      .subscribe(data => {
        let typesAux = data['results'];

        typesAux.forEach(type => {
          let newName = this.firstLetterUpper(type.name);
          let idType = this.extractIdUrl(type.url);

          let newType: PokemonType = { idType, name: newName, url: type.url, medal: this.insertMedalType(idType - 1) };

          if (newType.idType == 10001 || newType.idType == 10002) {
            console.log("Type not contains pokemons");
          } else {
            this.types.push(newType);
          }
        });
      });
  }

  insertMedalType(idType: number) {
    switch (idType) {
      case PokemonTypeEnum.NORMAL:
        return PokemonMedalEnum.NORMAL;

      case PokemonTypeEnum.FIGHTING:
        return PokemonMedalEnum.FIGHTING;

      case PokemonTypeEnum.FLYING:
        return PokemonMedalEnum.FLYING;

      case PokemonTypeEnum.POISON:
        return PokemonMedalEnum.POISON;

      case PokemonTypeEnum.GROUND:
        return PokemonMedalEnum.GROUND;

      case PokemonTypeEnum.ROCK:
        return PokemonMedalEnum.ROCK;

      case PokemonTypeEnum.BUG:
        return PokemonMedalEnum.BUG;
        
      case PokemonTypeEnum.GHOST:
        return PokemonMedalEnum.GHOST;

      case PokemonTypeEnum.STEEL:
        return PokemonMedalEnum.STEEL;

      case PokemonTypeEnum.FIRE:
        return PokemonMedalEnum.FIRE;

      case PokemonTypeEnum.WATER:
        return PokemonMedalEnum.WATER;

      case PokemonTypeEnum.GRASS:
        return PokemonMedalEnum.GRASS;

      case PokemonTypeEnum.ELETRIC:
        return PokemonMedalEnum.ELETRIC;

      case PokemonTypeEnum.PSYCHIC:
        return PokemonMedalEnum.PSYCHIC;

      case PokemonTypeEnum.ICE:
        return PokemonMedalEnum.ICE;

      case PokemonTypeEnum.DRAGON:
        return PokemonMedalEnum.DRAGON;

      case PokemonTypeEnum.DARK:
        return PokemonMedalEnum.DARK;

      case PokemonTypeEnum.FAIRY:
        return PokemonMedalEnum.FAIRY;
    }
  }

  redirectPokemon(type: string, id: number) {
    this.router.navigate(['types', id]);
  }

  firstLetterUpper(word: string) {
    let firstLetter = word[0];
    let newWord = firstLetter.toUpperCase() + word.slice(1);
    return newWord;
  }

  extractIdUrl(url: string) {
    return parseInt(url.substr(url.length - 6).replace(/[^\d]+/g, ''));
  }
}
