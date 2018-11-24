import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Movie } from '../models/movie';
import { MovieDetail } from '../models/movie-detail';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private apiUrl = `//www.omdbapi.com/?apikey=${environment.apiKey}`;

  constructor(private httpClient: HttpClient) {}

  public listMovies(term: string, page = '1') {
    return this.httpClient
      .jsonp(`${this.apiUrl}&s=${term}&page=${page}`, 'callback')
      .pipe(
        map(
          (response: any) =>
            response && {
              totalResults: response.totalResults,
              movies: response.Search && response.Search.map(this.parseMovie)
            }
        )
      );
  }

  public getMovie(imdbId: string) {
    return this.httpClient
      .jsonp(`${this.apiUrl}&i=${imdbId}&plot=full`, 'callback')
      .pipe(map((response: any) => this.parseMovieDetail(response)));
  }

  private parseMovie(info: any) {
    const movie: Partial<Movie> = {};
    movie.imdb = info.imdbID;
    movie.title = info.Title;
    movie.year = info.Year;
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
    movie.poster = info.Poster && info.Poster !== 'N/A' ? info.Poster : 'assets/no-image.jpg';
    movie.plot = info.Plot && info.Plot !== 'N/A' ? info.Plot : 'Sem descrição disponível.';
    return movie as MovieDetail;
  }
}
