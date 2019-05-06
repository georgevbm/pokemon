import { Component, OnInit } from '@angular/core';
import { PokemonAPIService } from '../service/pokemon-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PokemonMedalEnum } from './pokemon-medal.enum';
import { PokemonTypeEnum } from './pokemon-type.enum';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  types$: Observable<Object[]>;

  constructor(private pokemonService: PokemonAPIService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getTypes();
  }

  getTypes() {
    this.types$ = this.pokemonService.getAllTypes();
  }

  redirectPokemon(id: number) {
    if (id > 20) {
      this.router.navigate(['not-pokemons']);
    } else {
      this.router.navigate(['types', id]);
    }
  }

  firstLetterUpper(word: string) {
    let firstLetter = word[0];
    let newWord = firstLetter.toUpperCase() + word.slice(1);
    return newWord;
  }

  extractIdUrl(url: string) {
    return parseInt(url.substr(url.length - 6).replace(/[^\d]+/g, ''));
  }

  insertMedalType(idType: number) {
    switch (idType - 1) {
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

      default:
        return PokemonMedalEnum.NOT_MEDAL;
    }
  }
}
