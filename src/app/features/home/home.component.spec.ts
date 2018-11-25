import { CurrencyPipe } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import {
  NgbActiveModal,
  NgbModalModule,
  NgbPaginationModule
} from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieTableComponent } from './movie-table/movie-table.component';
import { MovieService } from 'src/app/shared/services/movie.service';
import { of } from 'rxjs';
import { Movie } from '../../shared/models/movie';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let movieService: MovieService;
  let movies: Movie[];
  let apiResponse: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, MovieTableComponent, MovieDetailComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        NgbModalModule,
        NgbPaginationModule
      ],
      providers: [NgbActiveModal, CurrencyPipe]
    }).compileComponents();
  }));

  beforeEach(async(() => {
    movieService = TestBed.get(MovieService);
    movies = [{ imdb: 'imdbtt4568', title: 'Spider-man', year: '2002' }];
    apiResponse = { movies: movies, totalResults: 1 };
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    movieService = undefined;
    movies = undefined;
    apiResponse = undefined;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have as title in h1 tag "Social Movies"', () => {
    const h1: HTMLElement = fixture.debugElement.nativeElement.querySelector(
      'h1'
    );
    expect(h1.textContent).toEqual('Social Movies');
  });

  it('should "listMovies" be called on click', () => {
    const btn: HTMLButtonElement = fixture.nativeElement.querySelector(
      '#btn-search'
    );
    spyOn(movieService, 'listMovies').and.returnValue(of({}));
    btn.click();
    expect(movieService.listMovies).toHaveBeenCalled();
  });

  it('should "movies" and "totalRecords" receive value', () => {
    const btn: HTMLButtonElement = fixture.nativeElement.querySelector(
      '#btn-search'
    );
    spyOn(movieService, 'listMovies').and.returnValue(of(apiResponse));
    btn.click();

    expect(component.movies).toBe(apiResponse.movies);
    expect(component.totalRecords).toBe(apiResponse.totalResults);
  });
});
