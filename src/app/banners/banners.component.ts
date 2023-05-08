import { Component, OnInit } from '@angular/core';
import { BannersService } from './banners.service';
import { Banner } from '../entities/banner.model';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss'],
})
export class BannersComponent implements OnInit {
  banners: Banner[] = [];

  constructor(private bannerService: BannersService) {}

  ngOnInit(): void {
    this.obtenerImagenesBanner();
  }

  obtenerImagenesBanner() {
    this.bannerService.obtenerImagenesCarousel().subscribe((data) => {
      data.forEach((imgBanner) => {
        const img: Banner = new Banner(imgBanner.imagen);
        this.banners.push(img);
      });
    });
  }
}
