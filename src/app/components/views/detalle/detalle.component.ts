import { PokemonService } from './../../../service/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  pokemon: any = {};
  id: string | null;
  constructor(private Aroute: ActivatedRoute,
              private route: Router,
              private _pokemonService: PokemonService) {
    this.id = this.Aroute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(){
    this._pokemonService.detailPokemon(this.id).subscribe(data => {
      this.pokemon = data;
      console.log(this.pokemon)
    })
  }

}
