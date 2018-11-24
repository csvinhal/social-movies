import { Injectable, NgModule } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterModule,
  Routes
} from '@angular/router';

import { MovieService } from '../../shared/services/movie.service';
import { MovieComponent } from './movie.component';

@Injectable()
export class MovieDataResolve implements Resolve<any> {
  constructor(private movieService: MovieService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.movieService.getMovie(route.params.imdb);
  }
}

const routes: Routes = [
  {
    path: 'movie/:imdb',
    component: MovieComponent,
    resolve: {
      movieData: MovieDataResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [MovieDataResolve]
})
export class MovieRoutingModule {}
