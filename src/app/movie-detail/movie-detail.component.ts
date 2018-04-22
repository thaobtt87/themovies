import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../shared/movies/movies.service';
import { Movie } from '../shared/movies/movie';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  @Input() movie: Movie;
  sub_id: Subscription;
  sub_movie: Subscription;
  id: number;

  constructor(private activatedRoute: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit() {
    this.sub_id = this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.getMovie();
    });
  }

  getMovie(): void {
    this.sub_movie = this.moviesService.getMovie(this.id).subscribe(movie => { this.movie = movie;});
  }
  ngOnDestroy() {
    this.sub_id.unsubscribe();
    this.sub_movie.unsubscribe();
  }
}
