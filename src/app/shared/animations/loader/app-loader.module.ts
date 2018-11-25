import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLoaderComponent } from './app-loader.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AppLoaderComponent],
  exports: [AppLoaderComponent],
  entryComponents: [AppLoaderComponent]
})
export class AppLoaderModule {}
