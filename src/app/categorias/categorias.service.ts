import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategoriaList } from '../interfaces/categoria-list.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }



  obtenerCategoriaList(): Observable<ICategoriaList[]>{
    const urlEndPoint: string = 'http://localhost:3002/categorias';
    return this.http.get<ICategoriaList[]>(urlEndPoint);
  }
}
