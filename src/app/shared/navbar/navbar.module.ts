import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarPageComponent } from './navbar-page/navbar-page.component';
import { NavbarSearcherComponent } from './navbar-searcher/navbar-searcher.component';
import { NavbarTitleComponent } from './navbar-title/navbar-title.component';

@NgModule({
  declarations: [
    NavbarPageComponent,
    NavbarSearcherComponent,
    NavbarTitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarPageComponent
  ]
})
export class NavbarModule { }
