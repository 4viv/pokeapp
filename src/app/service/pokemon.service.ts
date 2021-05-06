import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url: string = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getCatalogo(limit:number, offset:number): Observable<any>{
    return this.http.get(`${this.url}?limit=${limit}&offset=${offset}`);
  }

  detailPokemon(id: any): Observable<any>{
    return this.http.get(`${this.url}/${id}`);
  }

  getPokemon(name: any):Observable<any>{
    return this.http.get(`${this.url}/${name}`);
  }

}
