import { NgModule } from '@angular/core';
import { PokemonDetailsComponent } from './pokemon-details.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        PokemonDetailsComponent
    ],
    imports: [
        CommonModule
    ],
    exports:[
        PokemonDetailsComponent
    ]
})
export class PokemonDetailsModule {

}