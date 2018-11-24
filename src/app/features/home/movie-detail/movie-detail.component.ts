import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MovieService } from 'src/app/shared/services/movie.service';

import { MovieDetail } from '../../../shared/models/movie-detail';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent {
  public movieDetail: MovieDetail;
  private unsubscribe = new Subject();

  constructor(
    public activeModal: NgbActiveModal,
    private movieService: MovieService
  ) {}

  close() {
    this.activeModal.close();
  }

  @Input()
  set imdb(value: string) {
    this.movieService
      .getMovie(value)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (movieDetail: MovieDetail) => (this.movieDetail = movieDetail)
      );
  }

  get hasPoster() {
    return (
      this.movieDetail &&
      this.movieDetail.poster &&
      this.movieDetail.poster !== 'N/A'
    );
  }
}
