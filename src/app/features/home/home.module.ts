import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  NgbActiveModal,
  NgbModalModule,
  NgbPaginationModule
} from '@ng-bootstrap/ng-bootstrap';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieTableComponent } from './movie-table/movie-table.component';

@NgModule({
  declarations: [HomeComponent, MovieTableComponent, MovieDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    NgbModalModule,
    NgbPaginationModule
  ],
  entryComponents: [MovieDetailComponent],
  providers: [NgbActiveModal]
})
export class HomeModule {}
