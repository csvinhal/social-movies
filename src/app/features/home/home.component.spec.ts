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

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

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
      providers: [NgbActiveModal]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
