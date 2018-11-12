import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CommunicationEditionEventService} from './evenement/services/communication.edition.event.service';

import {CommunicationUserService} from './user/services/communication.user.service';
import {PlaceService} from './places/services/place.service';
import {SiteService} from './places/services/site.service';
import {UserService} from './user/services/user.service';
import {UserFormComponent} from './user/user-form.component';
import {PlaceDetailComponent} from './places/place-detail.component';
import {SiteListComponent} from './places/site-list.component';
import {AddPlaceComponent} from './places/add-place.component';
import {NotFoundComponent} from './error/not-found.component';
import {EventModelService} from './evenement/services/event.model.service';
import {CommunicationService} from './places/services/communication.service';
import {EventComponentModelService} from './evenement/services/event.component.model.service';
import {TypeService} from './evenement/services/type.service';
import {EditEventComponentModelComponent} from './evenement/edit-event-component-model.component';
import {EditEventModelComponent} from './evenement/edit-event-model.component';
import {UsersComponent} from './user/users.component';
import {EditLineModelComponent} from './evenement/edit-line-model.component';
import {MessageService} from './common/services/message.service';
import {ErreurMessageComponent} from './common/error-message.component';
import {EventModelsComponent} from './evenement/event-models.component';
import {EventModelListComponent} from './evenement/event-model-list.component';
import {CommunicationConsigneService} from './consigne/services/communication-consigne.service';
import {ConsigneService} from './consigne/services/consigne.service';
import {ConsignesComponent} from './consigne/consignes.component';
import {ConsigneListComponent} from './consigne/consigne-list.component';
import {EditConsigneComponent} from './consigne/edit-consigne.component';
import {LoginComponent} from './common/login.component';


//TODO separated module for each screen
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
    UsersComponent,
    AddPlaceComponent,
    NotFoundComponent,
    UserFormComponent,
    EditEventComponentModelComponent,
    EditEventModelComponent,
    EditLineModelComponent,
    EventModelsComponent,
    EventModelListComponent,
    ConsignesComponent,
    ConsigneListComponent,
    EditConsigneComponent,
    ErreurMessageComponent,
    LoginComponent

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
    TypeService,
    ConsigneService,
    CommunicationConsigneService,
    MessageService
  ],
  exports: [
    PlaceDetailComponent,
    SiteListComponent,
    UsersComponent,
    EventModelsComponent,
    ConsignesComponent,
    NotFoundComponent,
    ErreurMessageComponent,
    LoginComponent
  ],


})
export class SharedComponentModule {
}
