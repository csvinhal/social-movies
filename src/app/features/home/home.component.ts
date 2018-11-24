import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { debounceTime, mergeMap } from 'rxjs/operators';

import { MovieService } from '../../shared/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('search')
  public search: ElementRef;

  constructor(private router: Router, private movieService: MovieService) {
    this.onSearch = this.onSearch.bind(this);
  }

  public ngOnInit() {
    this.search.nativeElement.focus();
  }

  public onSearch(text: Observable<string>) {
    return text.pipe(
      debounceTime(300),
      mergeMap(term =>
        term.length < 2 ? [] : this.movieService.listMovies(term)
      )
    );
  }

  public onSelect(event: {
    item: { imdb: string; title: string };
    preventDefault: Function;
  }) {
    event.preventDefault();
    this.search.nativeElement.value = '';
    this.router.navigate([`movie/${event.item.imdb}`]);
  }
}
