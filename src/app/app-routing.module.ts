import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SiteListComponent} from './places/site-list.component';
import {EditionModelEvenementComponent} from './evenement/edition-model-evenement.component';
import {NotFoundComponent} from './error/not-found.component';
import {UserListComponent} from './user/user-list.component';
import {SharedComponentModule} from './shared-component.module';

const routes: Routes = [
  { path: 'agents', component: UserListComponent },
  { path: 'places', component: SiteListComponent },
  { path: 'editionEvenement', component: EditionModelEvenementComponent },
  { path: '', redirectTo: '/agents', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [SharedComponentModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
