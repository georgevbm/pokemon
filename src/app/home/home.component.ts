import { Component, OnInit } from '@angular/core';
import { PokemonAPIService } from '../service/pokemon-api.service';
import { TypePokemon } from '../service/type-pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  types: TypePokemon[] = [];

  constructor(private pokemonService: PokemonAPIService,
    private router: Router) { }

  ngOnInit() {
    this.getTypes();
  }

  getTypes() {
    this.pokemonService.getAllTypes()
      .subscribe(data => {
        let typesAux = data['results'];

        typesAux.forEach(type => {
          let newName = this.firstLetterUpper(type.name);
          let idType = this.extractIdUrl(type.url);

          let newType: TypePokemon = { idType, name: newName, url: type.url };

          this.types.push(newType);
        });
      });
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
