import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  @Input() pokemonList: Pokemon[];
  selectedPokemon: Pokemon;
  showModal: boolean;

  constructor() {
    this.pokemonList = [];
    this.showModal = false;
    this.selectedPokemon = {
      id: 0,
      extraInfo: '',
      image: '',
      name: '',
      species: '',
      description: '',
      types: [],
      height: '',
      weight: ''
    };
   }

  ngOnInit(): void {
    console.log(this.pokemonList);
  }

  openPokeBall(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
    this.showModal = true;
  }
  hideModal() {
    this.showModal = false;
  }
}
