import { Component, Input, OnDestroy, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './app-loader.component.html',
  styleUrls: ['./app-loader.component.scss']
})
export class AppLoaderComponent implements OnDestroy {
  @Input()
  public blockWindow: boolean;

  @Input()
  public set loading(loading: boolean) {
    this._loading = loading;
    this.blocking = loading;
  }

  public get loading() {
    return this._loading;
  }

  public contents: TemplateRef<any>;
  public blocking: boolean;

  private _loading: boolean;

  public ngOnDestroy() {
  }
}
