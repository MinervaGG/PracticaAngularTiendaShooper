import { TALLAS } from '../shared/TALLAS.enum';
import { ITalla } from '../interfaces/talla.interface';

export class Talla implements ITalla {
  public numero: TALLAS;
  public disponibilidad: boolean;

  constructor(numero: TALLAS, disponibilidad: boolean) {
    this.numero = numero;
    this.disponibilidad = disponibilidad;
  }
}
