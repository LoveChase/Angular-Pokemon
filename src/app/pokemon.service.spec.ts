import { TestBed } from '@angular/core/testing';
import { PokemonService } from './pokemon.service';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon/models/pokemon';
import { ErrorHandler, Injectable } from '@angular/core';
import { HttpInterceptor, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {of} from 'rxjs';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


let httpClientSpy: { get: jasmine.Spy };
let pokemonService: PokemonService;

beforeEach(() => {
  // TODO: spy on other methods too
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  pokemonService = new PokemonService(httpClientSpy as any);
});

// it('should return an error when the server returns a 404', () => {
//   const errorResponse = new HttpErrorResponse({
//     error: 'test 404 error',
//     status: 404, statusText: 'Not Found'
//   });

//   httpClientSpy.get.and.returnValue(of(errorResponse));

//   pokemonService.getListPokemon().subscribe(
//     pokemon => fail('expected an error, not pokemon'),
//     error  => expect(error.message).toContain('test 404 error')
//   );
// });

it('should return expected pokemon (HttpClient called once)', () => {
  const expectedHeroes: any = {};

  httpClientSpy.get.and.returnValue(of(expectedHeroes));

  pokemonService.getListPokemon().subscribe(
    pokemon => expect(pokemon).toEqual(expectedHeroes, 'expected pokemon'),
    fail
  );
  expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
});
