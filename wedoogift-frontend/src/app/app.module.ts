import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsDispatcherModule } from './cards-dispatcher/cards-dispatcher.module';
import { SharedModule } from './shared/shared.module';

import { TokenInjectorService } from './shared/services/token-injector/token-injector.service';


@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, CardsDispatcherModule, SharedModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInjectorService, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
