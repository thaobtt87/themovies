import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AboutComponent } from './about/about.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { PeopleComponent } from './people/people.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

import { RunTimePipe } from './shared/movies/runtime.pipe';
import { MoviesService } from './shared/movies/movies.service';
import { AppRoutingModule } from './/app-routing.module';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    LoadingSpinnerComponent,
    AboutComponent,
    TvshowsComponent,
    PeopleComponent,
    MoviesComponent,
    MovieDetailComponent,
    RunTimePipe,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    InfiniteScrollModule,
    AppRoutingModule
  ],
  providers: [ MoviesService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
