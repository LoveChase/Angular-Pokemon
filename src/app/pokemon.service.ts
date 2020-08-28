import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon } from './pokemon/models/pokemon';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  pokemonUrl:string = "https://pokeapi.co/api/v2/";
  limit:string = "pokemon?limit=9";

  constructor(private http:HttpClient) { }

  getListPokemon():Observable<any>{
    return this.http.get<Pokemon[]>(`${this.pokemonUrl}${this.limit}`);
  }

  getPokemonDetails(name):Observable<Pokemon>{
    return this.http.get<Pokemon>(`${this.pokemonUrl}pokemon/${name}`);
  }

}
