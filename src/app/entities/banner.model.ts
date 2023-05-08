import { IBanner } from "../interfaces/banner.interface";

export class Banner implements IBanner{
    
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