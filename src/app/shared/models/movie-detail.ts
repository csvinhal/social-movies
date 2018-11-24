import { Movie } from './movie';

export interface MovieDetail extends Movie {
  year: string;
  released: string;
  runtime: string;
  genre: string;
  director: string;
  poster: string;
  plot: string;
  value: string;
}
