import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'runtime'})
export class RunTimePipe implements PipeTransform {
    transform(data: number) {
        let minutes = data % 60;
        let hours = Math.floor(data/60);
        return hours+'h '+minutes+'m';
    }
}