import { NgModule } from '@angular/core';
import { PokemonComponent } from './pokemon.component';
import { CommonModule } from '@angular/common';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations:[
        PokemonComponent,
        PokemonDetailsComponent,
    ],
    imports:[
        CommonModule,
        RouterModule
    ],
    exports: [
        PokemonComponent,
        PokemonDetailsComponent
    ]
})
export class PokemonModule {
    
}