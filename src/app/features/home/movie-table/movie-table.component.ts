import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Movie } from '../../../shared/models/movie';

@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.scss']
})
export class MovieTableComponent implements OnInit {
  @Input()
  public totalRecords: number = 0;
  @Input()
  public movies: Movie[];
  @Output()
  public select: EventEmitter<string> = new EventEmitter();
  @Output()
  public pageChange: EventEmitter<number> = new EventEmitter();
  public page: number = 1;
  public maxSize: number = 3;

  constructor() {}

  public ngOnInit() {}

  public onSelect(imdb: string) {
    this.select.emit(imdb);
  }

  public onPageChange(event: any) {
    this.pageChange.emit(event);
  }
}
