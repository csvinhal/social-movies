import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';

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
  public pageChange: EventEmitter<number> = new EventEmitter();
  public page: number = 1;
  public maxSize: number = 3;

  constructor(private modalService: NgbModal) {}

  public ngOnInit() {}

  public onSelect(imdb: string) {
    const modalRef = this.modalService.open(MovieDetailComponent, {
      size: 'lg',
      centered: true
    });
    modalRef.componentInstance.loading = true;
    modalRef.componentInstance.imdb = imdb;
  }

  public onPageChange(event: any) {
    this.pageChange.emit(event);
  }
}
