import { NgFor } from "@angular/common";
import { IArticulo } from "../interfaces/articulo.interface";
import { Talla } from "./talla.model";

export class Articulo implements IArticulo{
    
    "id": number;
    "nombre": string;
    "precio": number;
    "favorito": boolean;
    "oferta": boolean;
    "nuevoPrecio": number;
    "imagen": string;
    "thumbnail":string;
    "tallas": Talla[]
   
  
    constructor(id: number, nombre: string, precio: number, favorito: boolean, oferta: boolean, nuevoPrecio: number, imagen: string, thumbnail: string, tallas: Talla[]) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.favorito = favorito;
        this.oferta = oferta;
        this.nuevoPrecio = nuevoPrecio;
        this.imagen = imagen;
        this.thumbnail = thumbnail;
        this.tallas = tallas;
    }    
    public getId(): number {
        return this.id;
    }
  
    public setId(number: number): void {
        this.id = number;
    }
    public getNombre(): string {
        return this.nombre;
    }
  
    public setNombre(string: string): void {
        this.nombre = string;
    }
    public getPrecio(): number {
        return this.precio;
    }
  
    public setPrecio(number: number): void {
        this.precio = number;
    }
    public getFavorito(): boolean {
        return this.favorito;
    }
  
    public setFavorito(boolean: boolean): void {
        this.favorito = boolean;
    }
    public getOferta(): boolean {
        return this.oferta;
    }
  
    public setOferta(boolean: boolean): void {
        this.oferta = boolean;
    }
    public getNuevoPrecio(): number {
        return this.nuevoPrecio;
    }
  
    public setNuevoPrecio(number: number): void {
        this.nuevoPrecio = number;
    }

    public getImagen(): string {
        return this.imagen;
    }
  
    public setImagen(string: string): void {
        this.imagen = string;
    }

    public getThumbnail(): string {
        return this.imagen;
    }
  
    public setThumbnail(string: string): void {
        this.imagen = string;
    }

    public getTallas(): Talla[] { 
        return this.tallas;
    }
  
    public setTallas(tallas: Talla[]): void {
        this.tallas = tallas;
    }
  }