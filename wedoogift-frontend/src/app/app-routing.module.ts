import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsDispatcherComponent } from './cards-dispatcher/components/cards-dispatcher.component';


import { ForbiddenComponent } from './shared/components/forbidden/forbidden.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: CardsDispatcherComponent,
    pathMatch: 'full',
  },
  {
    path: 'Home',
    component: CardsDispatcherComponent,
    pathMatch: 'full',
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '403',
    component: ForbiddenComponent,
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
