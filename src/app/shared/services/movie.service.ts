import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { environment } from '../../../environments/environment';
import { Movie } from '../models/movie';
import { MovieDetail } from '../models/movie-detail';
import { CurrencyPipe } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private apiUrl = `//www.omdbapi.com/?apikey=${environment.apiKey}`;

  constructor(
    private httpClient: HttpClient,
    private currencyPipe: CurrencyPipe
  ) {}

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
    movie.released =
      info.Released && info.Released !== 'N/A'
        ? moment(info.Released, 'DD MMM YYYY').format('DD/MM/YYYY')
        : info.Released;
    movie.runtime = info.Runtime;
    movie.genre = info.Genre;
    movie.director = info.Director;
    movie.poster =
      info.Poster && info.Poster !== 'N/A'
        ? info.Poster
        : 'assets/no-image.jpg';
    movie.plot =
      info.Plot && info.Plot !== 'N/A'
        ? info.Plot
        : 'Sem descrição disponível.';
    movie.boxOffice =
      info.BoxOffice && info.BoxOffice !== 'N/A'
        ? this.currencyPipe.transform(
            info.BoxOffice.replace('$', '').replace(/,/g, ''),
            'BRL',
            'symbol-narrow',
            '1.2-2'
          )
        : info.BoxOffice || 'N/A';
    return movie as MovieDetail;
  }
}
