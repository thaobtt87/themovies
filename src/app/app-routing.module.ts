import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AboutComponent } from './about/about.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent},
  { path: 'movie/:id', component: MovieDetailComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
