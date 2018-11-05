import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedComponentModule} from './shared-component.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {UrlInterceptorService} from './common/services/url-interceptor.service';
import {HeaderComponent} from './common/layout/header.component';
import {FooterComponent} from './common/layout/footer.component';
import {LayoutComponent} from './common/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedComponentModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: UrlInterceptorService,
    multi: true,
  }],
  bootstrap: [AppComponent],
  exports: [LayoutComponent]
})
export class AppModule {
}
