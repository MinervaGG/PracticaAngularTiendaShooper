import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Articulo } from '../../entities/articulo.model';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { Router } from '@angular/router';

registerLocaleData(localeEs, 'es');

@Component({
  selector: 'app-articulos-list-card',
  templateUrl: './articulos-list-card.component.html',
  styleUrls: ['./articulos-list-card.component.scss']
})
export class ArticulosListCardComponent implements OnInit{
  @Input() articulo?: Articulo;

  constructor(
    private router: Router
  ){}

  ngOnInit(): void{
  }

  public navegarAItem(id: number): void{
    this.router.navigate(['listaArticulos', id]);
  }

  public tieneOferta() : boolean{
    return this.articulo?.getNuevoPrecio() != this.articulo?.getPrecio();
  }

}
