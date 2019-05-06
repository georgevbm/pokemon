import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  @Input() pokemon: Pokemon;
  isShown: boolean = false;

  constructor() { }

  ngOnInit() {}

  toggleTrue(){
    this.isShown = true;
    console.log(this.isShown);
  }

  toggleFalse(){
    this.isShown = false;
  }

  private getTypes(types: string[]) {
    let typesAux: string[] = [];
    
    if(types){
      types.forEach(type => {
        typesAux.push(this.refactorName(type));
      });
  
      return typesAux.join(', ');
    } else {
      // Retirando a mensagem de erro pelo fato de que os tipos podem não ser definidos
      console.log();
    }
  }

  private convertMeters(n: number) {
    return n / 10;
}

  private refactorName(name: string) {
    let newName;

    if(name){
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
    } else {
      // Retirando a mensagem de erro pelo fato de que o nome pode não ser definido.
      console.log();
      return;
    }


  }

  private firstLetterUpper(word: string) {
    let firstLetter = word[0];
    let newWord = firstLetter.toUpperCase() + word.slice(1);
    return newWord;
  }
}
