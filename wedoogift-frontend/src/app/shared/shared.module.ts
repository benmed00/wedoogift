import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { NotFoundComponent } from './components/not-found/not-found.component';




@NgModule({
  declarations: [
    ForbiddenComponent,
    NotFoundComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, RouterModule, CommonModule, NgbModule],
  providers: [],
  exports: [
    ForbiddenComponent,
    NotFoundComponent,
    FooterComponent,
    HeaderComponent,
    BrowserModule,
    RouterModule,
    CommonModule,
    NgbModule,
  ],
})
export class SharedModule {}
