import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CommunicationEditionEventService} from './evenement/services/communication.edition.event.service';
import {UserListComponent} from './user/user-list.component';
import {CommunicationUserService} from './user/services/communication.user.service';
import {PlaceService} from './places/services/place.service';
import {SiteService} from './places/services/site.service';
import {UserService} from './user/services/user.service';
import {UserFormComponent} from './user/user-form.component';
import {PlaceDetailComponent} from './places/place-detail.component';
import {SiteListComponent} from './places/site-list.component';
import {AddPlaceComponent} from './places/add-place.component';
import {EditionModelEvenementComponent} from './evenement/edition-model-evenement.component';
import {EditionModelLineComponent} from './evenement/edition-model-line.component';
import {EditComponentModelComponent} from './evenement/edit-component-model.component';
import {NotFoundComponent} from './error/not-found.component';
import {EventModelService} from './evenement/services/event.model.service';
import {CommunicationService} from './places/services/communication.service';
import {GlobalService} from './common/services/global.service';
import {EventComponentModelService} from './evenement/services/event.component.model.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
    PlaceDetailComponent,
    SiteListComponent,
    UserListComponent,
    AddPlaceComponent,
    NotFoundComponent,
    UserFormComponent,
    EditComponentModelComponent,
    EditionModelEvenementComponent,
    EditionModelLineComponent,

  ],
  providers: [
    PlaceService,
    SiteService,
    UserService,
    CommunicationService,
    CommunicationUserService,
    CommunicationEditionEventService,
    EventModelService,
    EventComponentModelService,
    GlobalService
  ],
  exports: [
    PlaceDetailComponent,
    SiteListComponent,
    UserListComponent,
    AddPlaceComponent,
    NotFoundComponent,
    UserFormComponent
  ],


})
export class SharedComponentModule {
}
