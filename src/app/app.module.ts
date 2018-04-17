import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { MoviesService } from './services/movies.service';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    CarouselComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
