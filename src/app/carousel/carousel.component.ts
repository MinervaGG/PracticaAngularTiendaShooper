import { Component, OnInit } from '@angular/core';
import { CarouselService } from './carousel.service';
import { ICarousel } from '../interfaces/carousel.interface';
import { Carousel } from '../entities/carousel.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit{
  
  imagenesCarousel: Carousel[] = [];
  indiceCarousel : number = 0;

  constructor(
    private carouselService: CarouselService
  ){}

  ngOnInit(): void {
    this.obtenerImagenesCarouselRest();    
  }

  private obtenerImagenesCarouselRest() {
    this.carouselService.obtenerImagenesCarousel().subscribe(
      (data) => {
        data.forEach( (imagenCarousel) => {
           const img: Carousel = new Carousel(imagenCarousel.imagen);
           this.imagenesCarousel.push(img);
        })       
      }
    )
  }  
}
