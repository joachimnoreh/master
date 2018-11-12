import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SiteListComponent} from './places/site-list.component';

import {NotFoundComponent} from './error/not-found.component';
import {UsersComponent} from './user/users.component';
import {SharedComponentModule} from './shared-component.module';
import {EventModelsComponent} from './evenement/event-models.component';
import {ConsignesComponent} from './consigne/consignes.component';
import {LoginComponent} from './common/login.component';
import {AuthGuard} from './common/auth.guard';


const routes: Routes = [
  { path: 'users', component: UsersComponent, pathMatch: 'full' , canActivate: [AuthGuard] },
  { path: 'places', component: SiteListComponent, canActivate: [AuthGuard] },
  { path: 'events', component: EventModelsComponent , canActivate: [AuthGuard]},
  { path: 'directives', component: ConsignesComponent , canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [SharedComponentModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
