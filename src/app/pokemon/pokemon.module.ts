import { NgModule } from '@angular/core';
import { PokemonComponent } from './pokemon.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PokemonDetailsModule } from './pokemon-details/pokemon-details.module';

@NgModule({
    declarations:[
        PokemonComponent
    ],
    imports:[
        CommonModule,
        RouterModule,
        PokemonDetailsModule
    ],
    exports: [
        PokemonComponent
    ]
})
export class PokemonModule {
    
}