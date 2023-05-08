import { Component, Input, OnInit } from '@angular/core';
import { Articulo } from '../../entities/articulo.model';
import { ActivatedRoute } from '@angular/router';
import { ArticulosService } from '../articulos.service';
import { Talla } from '../../entities/talla.model';

@Component({
  selector: 'app-articulo-item',
  templateUrl: './articulo-item.component.html',
  styleUrls: ['./articulo-item.component.scss']
})
export class ArticuloItemComponent implements OnInit{
  idArticulo?: string;
  public articulo ?: Articulo;

  constructor(
    private route: ActivatedRoute,
    private articuloService: ArticulosService
  ){}
  
  ngOnInit(): void {
    this.idArticulo = this.route.snapshot.paramMap.get('id') ?? undefined;
    this.obtenerArticulo( +this.idArticulo!);
  }
  
  obtenerArticulo(id: number) {
    this.articuloService.obtenerArticuloEspecifico(id).subscribe((data) => {
      this.articulo = data;
    });
  }

  public tieneOferta() : boolean{
    return this.articulo?.nuevoPrecio != this.articulo?.precio;
  }

  tallaEstaDisponible(talla: Talla) : boolean{
    return talla.disponibilidad;
  }
}
