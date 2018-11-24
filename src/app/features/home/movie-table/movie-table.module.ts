import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { MovieTableComponent } from './movie-table.component';

@NgModule({
  declarations: [MovieTableComponent],
  exports: [MovieTableComponent],
  imports: [CommonModule, NgbPaginationModule]
})
export class MovieTableModule {}
