import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../entities/articulo.model';
import { ArticulosService } from '../articulos.service';

@Component({
  selector: 'app-articulos-list',
  templateUrl: './articulos-list.component.html',
  styleUrls: ['./articulos-list.component.scss']
})
export class ArticulosListComponent implements OnInit{

  listaArticulos: Articulo[] = [];

  constructor(private articulosService: ArticulosService){}

  ngOnInit(): void {
    this.obtenerArticulos();
  }


  obtenerArticulos() {
    this.articulosService.obtenerListaArticulos().subscribe((data) => {
      data.forEach((articulo) => {
        const art: Articulo = new Articulo(articulo.id, articulo.nombre, articulo.precio, articulo.favorito, articulo.oferta, articulo.nuevoPrecio,
          articulo.imagen, articulo.thumbnail, articulo.tallas);
        this.listaArticulos.push(art);
      });
    });
  }

}
