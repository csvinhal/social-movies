import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, NgbTypeaheadModule, HomeRoutingModule]
})
export class HomeModule {}
