export class Movie {
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
