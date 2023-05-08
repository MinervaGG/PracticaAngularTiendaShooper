import { ICarousel } from "../interfaces/carousel.interface";

export class Carousel implements ICarousel{
    
  imagen: string;

  public getImagen(): string {
      return this.imagen;
  }

  public setImagen(string: string): void {
      this.imagen = string;
  }


  constructor(imagen: string) {
  this.imagen = imagen;
  }    
}