import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { MovieTableComponent } from './movie-table.component';

describe('MovieTableComponent', () => {
  let component: MovieTableComponent;
  let fixture: ComponentFixture<MovieTableComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieTableComponent],
      imports: [NgbPaginationModule]
    }).compileComponents();
  }));

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
    component.movies = [
      { imdb: 'imdb1234', title: 'Spider-Man', year: '2012' }
    ];
    fixture.detectChanges();
    expect(element.querySelector('.visible#dv-movie-table')).toBeTruthy();
    expect(element.querySelector('.invisible#dv-movie-table')).toBeFalsy();
  });
});
