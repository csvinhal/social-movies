import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeModule } from './home/home.module';
import { MovieModule } from './movie/movie.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HomeModule, MovieModule]
})
export class FeaturesModule {}
