import { Component, OnInit, Input } from '@angular/core';
import {PokemonService} from "../pokemon.service"
import { Pokemon } from '../pokemon/models/pokemon';


@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
@Input() pokemon:Pokemon
  pokemonDetails:any;

  constructor(private pokemonService:PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemonDetails(this.pokemon.name).subscribe(data=>{
      this.pokemonDetails = data;
    });
  }

    // Set Dynamic Class based on pokemn Type
    setTypeClass() {
      let classes = {
        fire:  this.pokemonDetails.types[0].type.name == 'fire' ? true : false,
        water: this.pokemonDetails.types[0].type.name == 'water' ? true : false,
        grass: this.pokemonDetails.types[0].type.name == 'grass' ? true : false
      }

      return classes;
    }

}
