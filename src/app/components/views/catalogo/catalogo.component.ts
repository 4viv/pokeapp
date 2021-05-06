import { PokemonService } from './../../../service/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  pokemones: any[] = [];
  page: number = 0;
  totalPokemons: number = 0;
  name: string ='';
  pokemon: any = {};

  constructor(public _pokemon: PokemonService,
              private router: Router) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(){
    this._pokemon.getCatalogo(20, (this.page*20) ).subscribe((data: any) => {
      this.totalPokemons = data.count;
      console.log(this.totalPokemons)
      data.results.forEach((element: any) => {
        this._pokemon.getPokemon(element.name).subscribe((res: any) => {
          this.pokemones.push(res);
        })
      });
    })
  }

  getDetail(id: number){
  this.router.navigate(['/detalle', id]);
  }

  searchPokemon(){
    const nama = this.name.toLowerCase();
    this._pokemon.getPokemon(nama).subscribe((data: any) => {
      this.pokemon = data;
      this.getDetail(this.pokemon.id)
    })
  }

}
