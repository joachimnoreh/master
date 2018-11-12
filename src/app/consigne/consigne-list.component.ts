import {Component} from '@angular/core';
import {CommunicationConsigneService} from './services/communication-consigne.service';
import {ConsigneService} from './services/consigne.service';
import {Consigne} from './models/consigne';

@Component({
  selector: 'app-consigne-list',
  templateUrl: './template/consigne-list.html'

})
export class ConsigneListComponent {


  consigneList: Consigne[];
  edit: boolean;

  constructor(private consigneService: ConsigneService,
              private communicationConsigneService: CommunicationConsigneService) {
    this.consigneService.getConsignes().subscribe((consignes: Consigne[]) => {
      this.consigneList = consignes;
    });
  }

  setSelectedConsigne(consigne: Consigne) {
    this.communicationConsigneService.consigneSubject.next(consigne);
  }
}

