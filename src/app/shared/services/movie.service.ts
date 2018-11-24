import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Movie } from '../models/movie';
import { MovieDetail } from '../models/movie-detail';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private apiUrl = `http://www.omdbapi.com/?apikey=${environment.apiKey}`;

  constructor(private httpClient: HttpClient) {}

  public listMovies(term: string) {
    return this.httpClient
      .jsonp(`${this.apiUrl}&s=${term}`, 'callback')
      .pipe(
        map(
          (response: any) =>
            response && response.Search && response.Search.map(this.parseMovie)
        )
      );
  }

  public getMovie(imdbId: string) {
    return this.httpClient
      .jsonp(`${this.apiUrl}&i=${imdbId}`, 'callback')
      .pipe(map((response: any) => this.parseMovieDetail(response)));
  }

  private parseMovie(info: any) {
    const movie: Partial<Movie> = {};
    movie.imdb = info.imdbID;
    movie.title = info.Title;
    return movie as Movie;
  }

  private parseMovieDetail(info: any) {
    const movie: Partial<MovieDetail> = {};
    movie.imdb = info.imdbID;
    movie.title = info.Title;
    movie.year = info.Year;
    movie.released = info.Released;
    movie.runtime = info.Runtime;
    movie.genre = info.Genre;
    movie.director = info.Director;
    movie.poster = info.Poster;
    movie.plot = info.Plot;
    return movie as MovieDetail;
  }
}
