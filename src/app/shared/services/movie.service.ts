import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Movie } from '../../shared/models/movies';

@Injectable({ providedIn: 'root' })
export class MovieService {
  constructor(private httpClient: HttpClient) {}

  public listMovies(term: string) {
    return this.httpClient
      .jsonp(
        `http://www.omdbapi.com/?apikey=${environment.apiKey}&s=${term}`,
        'callback'
      )
      .pipe(
        map(
          (response: any) =>
            response &&
            response.Search &&
            response.Search.map(this.parseMovieInfo)
        )
      );
  }

  private parseMovieInfo(info: any) {
    const movie: Partial<Movie> = {};
    movie.imdb = info.imdbID;
    movie.title = info.Title;
    return movie as Movie;
  }
}
