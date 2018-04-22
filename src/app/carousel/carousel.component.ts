import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbCarouselConfig, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { MoviesService } from '../shared/movies/movies.service';
import { Genre } from '../shared/movies/genre';
import { Movie } from '../shared/movies/movie';
import { environment } from '../../environments/environment';
import * as _ from 'lodash';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  providers: [NgbCarouselConfig, NgbRatingConfig]
})
export class CarouselComponent implements OnInit, OnDestroy {
  url: string = environment.NOWPLAYING_URL;
  movies: Movie[];
  sub_movies: Subscription;

  constructor(private config: NgbCarouselConfig, private rateConfig: NgbRatingConfig, private moviesService: MoviesService) {
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;
    rateConfig.max = 5;
  }

  ngOnInit() {
    this.sub_movies = this.moviesService.getMovies(this.url).subscribe(movies => {
      const movieArray = movies.results.slice(0, 3);
      this.movies = movieArray;
    });
  }

  getGenres(genre_ids: Array<number>): Genre[] {
    return _.join(_.map(this.moviesService.getGenres(genre_ids), 'name'), ' ');
  }
  
  ngOnDestroy() {
    this.sub_movies.unsubscribe();
}  
}
