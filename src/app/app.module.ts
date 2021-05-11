import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LastResultF1Component } from './last-result-f1/last-result-f1.component';
import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
@NgModule({
  declarations: [
    AppComponent,
    LastResultF1Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent, LastResultF1Component]
})
export class AppModule {
  // Para convertir en web component
  constructor(private injector: Injector) {
    const elementCustom = createCustomElement(
      LastResultF1Component,
      {
        injector: this.injector
      }
    );
    customElements.define('last-f1-results-widget', elementCustom);
  }
  ngDoBootstrap(appRef: ApplicationRef): void {
    if (document.querySelector('app-root')) {
      appRef.bootstrap(AppComponent);
    }
  }
}
