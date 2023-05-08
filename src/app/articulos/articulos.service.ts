import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IArticulo } from '../interfaces/articulo.interface';
import { Articulo } from '../entities/articulo.model';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor(private http: HttpClient) { }


  obtenerListaArticulos(): Observable<IArticulo[]>{
    const urlEndPoint: string = 'http://localhost:3002/articulos';
    return this.http.get<IArticulo[]>(urlEndPoint);
  }


  obtenerArticuloEspecifico(id: number): Observable<Articulo>{
    const urlEndPoint: string = 'http://localhost:3002/articulos/' + id;
    return this.http.get<Articulo>(urlEndPoint);
  }
}
