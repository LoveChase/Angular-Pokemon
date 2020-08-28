import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../pokemon.service"
import { Pokemon } from './models/pokemon';
import { ConvertPropertyBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  listPokemon:Pokemon[];
  constructor(private pokemonService:PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getListPokemon().subscribe(data=>{
      this.listPokemon = data.results;
    });
  }

}
