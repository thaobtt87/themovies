import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { Genre } from './genre';
import { Movie } from './movie';
import * as _ from 'lodash';
import { Subscription } from 'rxjs';

@Injectable()
export class MoviesService implements OnDestroy {
    private fullGenres: Array<Genre>;
    sub_genre: Subscription;
    constructor(private http: HttpClient) {
        this.sub_genre = this.http.get(environment.GENRE_URL).subscribe((response: any) => {
            this.fullGenres = response.genres;
        });
     }

    getGenreList(movies: Movie[]): Array<Genre> {
        let array: Array<number> = [];

        _.forEach(movies, (value, key) => {
            array = _.union(array, value.genre_ids);
        });

        return this.getGenres(array);
    }

    getGenres(genres_id: Array<number>): Genre[] {
        let result: Array<Genre> = [];
        _.forEach(genres_id, (value) => {
            result.push(_.find(this.fullGenres, { 'id': value }));
        });
        return result;
    }

    getMovies(url: string, page = 1): Observable<any> {
        return this.http.get(url + "&page=" + page);
    }

    getMovie(id: number): Observable<any> {
        return this.http.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + environment.API_TOKEN + '&language=en-US')
    }

    ngOnDestroy() {
        this.sub_genre.unsubscribe();
    }
}