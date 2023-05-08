import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICarousel } from '../interfaces/carousel.interface';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(
    private http: HttpClient) { }

  obtenerImagenesCarousel(): Observable<ICarousel[]>{
    const urlEndPoint: string = 'http://localhost:3002/carousel';
    return this.http.get<ICarousel[]>(urlEndPoint);
  }
}