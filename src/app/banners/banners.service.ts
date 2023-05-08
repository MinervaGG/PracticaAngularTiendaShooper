import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBanner } from '../interfaces/banner.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannersService {

  constructor(
    private http: HttpClient) { }

  obtenerImagenesCarousel(): Observable<IBanner[]>{
    const urlEndPoint: string = 'http://localhost:3002/banners';
    return this.http.get<IBanner[]>(urlEndPoint);
  }
}
