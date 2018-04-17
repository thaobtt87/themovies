import { Component, OnInit } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { MoviesService, IGenres, IMovies } from '../services/movies.service';
import { environment } from '../../environments/environment';
import * as _ from 'lodash';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html'  
})
export class MoviesComponent implements OnInit {
  private popularUrl = environment.POPULAR_URL;
  private topratedUrl = environment.TOPRATED_URL;
  private upcomingUrl = environment.UPCOMING_URL;
  private currentUrl: string;
  private genres: Array<IGenres>;
  public isFinish: boolean = false;
  private page: number;
  private perPage: number = 20;
  private totalPage: number;
  private currentMovies: Array<IMovies>;
  private newMovies: Array<IMovies>;
  private moviesToShow: Array<IMovies>;
  public tabsToShow: Array<any> = [
    { id: 'tab-popular', title: 'Popular'},
    { id: 'tab-toprated', title: 'Top Rated'},
    { id: 'tab-upcoming', title: 'Upcoming'}];

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit() {
    this.currentUrl = this.popularUrl;
    this.getMovies(this.currentUrl, 1);
  }

  private getMovies(url: string, page = 1) {
    this.moviesService.getMovies(url, page).subscribe(movies => {
      if (page === 1) {
        this.currentMovies = movies.results;
        this.totalPage = movies.total_pages;
        this.page = movies.page;
        this.moviesToShow = this.currentMovies;
      } else {
        this.newMovies = movies.results;
        this.moviesToShow = _.concat(this.currentMovies, this.newMovies);
        this.currentMovies = this.moviesToShow;
      }
      this.genres = this.moviesService.getGenreList(this.moviesToShow);
    });
  }

  public onScroll() {
    if (this.page <= this.totalPage) {
      this.page++;
      this.getMovies(this.currentUrl, this.page);
    } else {
      this.isFinish = true;
    }
  }

  private getGenres(genre_ids: Array<number>): Array<IGenres> {
    return _.join(_.map(this.moviesService.getGenres(genre_ids), 'name'), ', ');
  }

  public beforeChange($event: NgbTabChangeEvent) {
    switch ($event.nextId) {
      case 'tab-popular':
        this.currentUrl = this.popularUrl;
        break;
      case 'tab-toprated':
        this.currentUrl = this.topratedUrl;
        break;
      case 'tab-upcoming':
        this.currentUrl = this.upcomingUrl;
        break;
    }
    this.getMovies(this.currentUrl, 1);
  }
}
