import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

import { MovieDetail } from '../../shared/models/movie-detail';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  public movieDetail: MovieDetail;

  constructor(private route: ActivatedRoute) {}

  public ngOnInit() {
    this.route.data.subscribe((data: Data) => this.onDataChange(data));
  }

  public onDataChange(data: Data) {
    this.movieDetail = data.movieData;
  }
}
