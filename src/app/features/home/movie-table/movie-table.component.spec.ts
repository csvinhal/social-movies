import { CommonModule, CurrencyPipe } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgModule } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  NgbActiveModal,
  NgbModalModule,
  NgbPaginationModule
} from '@ng-bootstrap/ng-bootstrap';

import { Movie } from '../../../shared/models/movie';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { MovieTableComponent } from './movie-table.component';

// Foi necessário o mock para injetar o componente MovieDetail e testar se o modal iria abrir no click do botão.
@NgModule({
  imports: [CommonModule, HttpClientTestingModule, NgbModalModule],
  declarations: [MovieDetailComponent],
  entryComponents: [MovieDetailComponent]
})
class HomeTestMockModule {}

describe('MovieTableComponent', () => {
  let component: MovieTableComponent;
  let fixture: ComponentFixture<MovieTableComponent>;
  let element: HTMLElement;
  let movies: Movie[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieTableComponent],
      imports: [HomeTestMockModule, NgbPaginationModule],
      providers: [NgbActiveModal, CurrencyPipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    movies = [{ imdb: 'imdb1234', title: 'Spider-Man', year: '2012' }];
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieTableComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not show the table', () => {
    expect(element.querySelector('.visible#dv-movie-table')).toBeFalsy();
    expect(element.querySelector('.invisible#dv-movie-table')).toBeTruthy();
  });

  it('should show the table', () => {
    component.movies = movies;
    fixture.detectChanges();
    expect(element.querySelector('.visible#dv-movie-table')).toBeTruthy();
    expect(element.querySelector('.invisible#dv-movie-table')).toBeFalsy();
  });

  it('should have the "title", "year" and "action" from item', () => {
    component.movies = movies;
    fixture.detectChanges();

    expect(element.querySelector('#td-title-0')).toBeTruthy();
    expect(element.querySelector('#td-year-0')).toBeTruthy();
    expect(element.querySelector('#td-action-0')).toBeTruthy();
  });

  it('should open the movie detail modal', () => {
    component.movies = movies;
    fixture.detectChanges();
    const btnDetail: HTMLButtonElement = element.querySelector('#btn-detail-0');
    btnDetail.click();
    expect(document.querySelector('#movie-detail-header')).toBeTruthy();
  });
});
