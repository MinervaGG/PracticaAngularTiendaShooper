import { ICategoriaList } from "../interfaces/categoria-list.interface";

export class CategoriaList implements ICategoriaList{
    id: string;
    nombreCategoria: string;
    imagen: string;

    public getId(): string {
        return this.id;
    }
  
    public setId(string: string): void {
        this.id = string;
    }


    public getNombre(): string {
        return this.nombreCategoria;
    }
  
    public setNombre(string: string): void {
        this.nombreCategoria = this.nombreCategoria;
    }

  
    public getImagen(): string {
        return this.imagen;
    }
  
    public setImagen(string: string): void {
        this.imagen = string;
    }
  
  
    constructor(id: string, nombreCategoria: string, imagen: string) {
        this.id = id;
        this.nombreCategoria = nombreCategoria;
        this.imagen = imagen;
    }    
    
  }