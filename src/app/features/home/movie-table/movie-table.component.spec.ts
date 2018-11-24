import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { MovieTableComponent } from './movie-table.component';

describe('MovieTableComponent', () => {
  let component: MovieTableComponent;
  let fixture: ComponentFixture<MovieTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieTableComponent],
      imports: [NgbPaginationModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
