import {Component, OnInit} from '@angular/core';


import {ConsigneService} from './services/consigne.service';
import {Consigne} from './models/consigne';
import {CommunicationConsigneService} from './services/communication-consigne.service';


@Component({
  selector: 'app-edit-consigne',
  templateUrl: './template/edit-consigne.html'

})
export class EditConsigneComponent implements OnInit {

  consigne: Consigne;


  constructor(private consigneService: ConsigneService,
              private communicationEditionEventService: CommunicationConsigneService) {
    this.communicationEditionEventService.consigneSubject.asObservable().subscribe((consigne: Consigne) => {
      this.consigne = consigne;
    });
  }

  cancel() {

  }

  save() {
    let operation = 'updateConsigne';
    if (!this.consigne._id) {
      operation = 'createConsigne';
    }
    this.consigneService[operation](this.consigne).subscribe((consigneCreated: Consigne) => {
      this.consigne = consigneCreated;
    });
  }

  ngOnInit(): void {
    this.consigne = new Consigne();
    this.consigne.title = 'New directive';

  }
}



