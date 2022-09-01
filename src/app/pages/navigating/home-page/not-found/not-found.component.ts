import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  favouritePokemon: Pokemon[];

  constructor(private pokemonSevice: PokemonService) { 
    this.favouritePokemon = [];
  }

  ngOnInit(): void {
    this.pokemonSevice.getFavouritePokemon().subscribe(
      (pokemonList: Pokemon[]) => this.favouritePokemon = pokemonList);
  }

}
