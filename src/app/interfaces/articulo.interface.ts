import { Talla } from "../entities/talla.model";

export interface IArticulo{
    "id": number,
    "nombre": string,
    "precio": number,
    "favorito": boolean,
    "oferta": boolean,
    "nuevoPrecio": number,
    "imagen": string,
    "thumbnail":string,
    "tallas": Talla[]
}