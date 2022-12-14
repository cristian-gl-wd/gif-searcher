import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { GifsModule } from './gifs/gifs.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    NavbarModule,
    GifsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
