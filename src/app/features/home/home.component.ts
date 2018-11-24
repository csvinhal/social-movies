import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Movie } from '../../shared/models/movie';
import { MovieService } from '../../shared/services/movie.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('search')
  public search: ElementRef;
  public searchText: string;
  public movies: Movie[];
  public totalRecords: number = 0;

  private unsubscribe = new Subject();

  constructor(private router: Router, private movieService: MovieService) {
    this.onSearch = this.onSearch.bind(this);
  }

  public ngOnInit() {
    this.search.nativeElement.focus();
  }

  public ngOnDestroy() {
    this.unsubscribe.next(true);
    this.unsubscribe.complete();
  }

  public onSearch() {
    this.getMoviesList();
  }

  public onSelect(imdb: string) {
    this.router.navigate([`movie/${imdb}`]);
  }

  public onPageChange(pageNumber: number) {
    this.getMoviesList(pageNumber);
  }

  private getMoviesList(pageNumber?) {
    this.movieService
      .listMovies(this.searchText, pageNumber)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((list: any) => {
        this.totalRecords = list.totalResults;
        this.movies = list.movies;
      });
  }
}
