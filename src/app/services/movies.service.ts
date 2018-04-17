import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import * as _ from 'lodash';

export interface IGenres {
    id: number;
    name: string;
}

export interface IMovies {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    release_date: Date;
    vote_average: number;
    vote_count: number;
    genre_ids: Array<number>;
    adult: boolean;
}

@Injectable()
export class MoviesService {
    private fullGenres: Array<IGenres>;
    constructor(private http: HttpClient) {
        this.http.get(environment.GENRE_URL).subscribe((response:any) => {
            this.fullGenres = response.genres;
        });
    }

    getMovies(url: string, page = 1): Observable<any> {
        return this.http.get(url+"&page="+page);
    }    

    getGenreList(movies: Array<IMovies>): Array<IGenres> {
        let array: Array<number> = [];

        _.forEach(movies, (value, key) => {
            array = _.union(array, value.genre_ids);
        });

        return this.getGenres(array);
    }

    getGenres(genres_id: Array<number>) : Array<IGenres> {
        let result: Array<IGenres> = [];
        _.forEach(genres_id, (value) => {
            result.push(_.find(this.fullGenres, { 'id': value }));
        });        
        return result;
    }
}