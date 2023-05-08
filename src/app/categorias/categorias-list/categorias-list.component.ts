import { Component, OnInit } from '@angular/core';
import { CategoriaList } from '../../entities/categoria-list.model';
import { CategoriasService } from '../categorias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias-list',
  templateUrl: './categorias-list.component.html',
  styleUrls: ['./categorias-list.component.scss']
})
export class CategoriasListComponent implements OnInit{

  categoriaList: CategoriaList[] = [];

  constructor(private categoriaListService: CategoriasService,
    private router: Router,) {}

  ngOnInit(): void {
    this.obtenerCategoriasList();
  }

  obtenerCategoriasList() {
    this.categoriaListService.obtenerCategoriaList().subscribe((data) => {
      data.forEach((categorias) => {
        const categoria: CategoriaList = new CategoriaList(categorias.id, categorias.nombreCategoria, categorias.imagen);
        this.categoriaList.push(categoria);
      });
    });
  }

  public navegarAListaArticulos(): void {
    this.router.navigate(['listaArticulos']);
  }

}
