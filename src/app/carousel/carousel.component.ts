import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { CarouselService } from '../services/carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  providers: [NgbCarouselConfig, CarouselService, NgbRatingConfig]
})
export class CarouselComponent implements OnInit {
  images: Array<Object>;

  constructor(private config: NgbCarouselConfig, private carouselService: CarouselService, private rateConfig: NgbRatingConfig) {
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;
    rateConfig.max = 5;
  }

  ngOnInit() {
    this.images = this.carouselService.getImages();
  }

}
