import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticulosListComponent } from './articulos/articulos-list/articulos-list.component';
import { ArticuloItemComponent } from './articulos/articulo-item/articulo-item.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'listaArticulos', component: ArticulosListComponent},
  {path: 'listaArticulos/:id', component: ArticuloItemComponent},
  {path: 'nosotros', component: NosotrosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
