import { Movie } from './movie';

export interface MovieDetail extends Movie {
  released: string;
  runtime: string;
  genre: string;
  director: string;
  poster: string;
  plot: string;
  value: string;
}
