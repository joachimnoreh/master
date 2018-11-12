import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SiteListComponent} from './places/site-list.component';

import {NotFoundComponent} from './error/not-found.component';
import {UsersComponent} from './user/users.component';
import {SharedComponentModule} from './shared-component.module';
import {EditEventModelComponent} from './evenement/edit-event-model.component';
import {EventModelsComponent} from './evenement/event-models.component';
import {ConsignesComponent} from './consigne/consignes.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent, pathMatch: 'full' },
  { path: 'places', component: SiteListComponent },
  { path: 'events', component: EventModelsComponent},
  { path: 'directives', component: ConsignesComponent},
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [SharedComponentModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
