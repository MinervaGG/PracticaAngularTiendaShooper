import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BannersComponent } from './banners/banners.component';
import { CategoriasListComponent } from './categorias/categorias-list/categorias-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ArticulosListComponent } from './articulos/articulos-list/articulos-list.component';
import { ArticulosListCardComponent } from './articulos/articulos-list-card/articulos-list-card.component';
import { ArticuloItemComponent } from './articulos/articulo-item/articulo-item.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    BannersComponent,
    CategoriasListComponent,
    HomeComponent,
    ArticulosListComponent,
    ArticulosListCardComponent,
    ArticuloItemComponent,
    NosotrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
