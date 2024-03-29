import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonDetailsComponent } from "./pokemon/pokemon-details/pokemon-details.component";
import { NotPokemonComponent } from './errors/not-pokemon/not-pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'types/:idType',
        component: PokemonComponent
      },
      {
        path: 'not-pokemons',
        component: NotPokemonComponent,
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
