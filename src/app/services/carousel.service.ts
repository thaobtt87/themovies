import { Injectable } from '@angular/core';

@Injectable()
export class CarouselService {
    getImages(): Array<Object> {
        let images: Array<Object> = [
            {id: 1, name: 'Wrath of the Titans', genres: 'Fantasy Animation Family', duration: '1h 52m', src: 'banner1.png', vote_average: '3.4', vote_count: '3546'},
            {id: 2, name: 'Behind the scenes', genres: 'Fantasy Animation Family', duration: '1h 52m', src: 'banner2.jpg', vote_average: '4.2', vote_count: '1687'},
            {id: 3, name: 'The Avengers', genres: 'Fantasy Animation Family', duration: '1h 52m', src: 'banner3.jpg', vote_average: '3.5', vote_count: '4512'}
        ];
        return images;
    }
}