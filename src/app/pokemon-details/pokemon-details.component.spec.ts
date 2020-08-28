import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonDetailsComponent } from './pokemon-details.component';
import {PokemonService} from "../pokemon.service"
import { HttpClientTestingModule } from '@angular/common/http/testing';



// describe('PokemonDetailsComponent', () => {
//   let component: PokemonDetailsComponent;
//   let fixture: ComponentFixture<PokemonDetailsComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ PokemonDetailsComponent ],
//       imports: [
//         HttpClientTestingModule
//       ],
//       providers: [
//         PokemonService
//       ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(PokemonDetailsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
