import {Component} from '@angular/core';
import {MessageService} from './services/message.service';

@Component({
  selector: 'app-error-message',
  templateUrl: './template/error-message-component.html'

})
export class ErreurMessageComponent {

  messages: string[];
  show: boolean;

  constructor(private messageService: MessageService) {
    this.messages = [];
    this.messageService.errorObservable.asObservable().subscribe((message: string) => this.addMessage(message));
  }

  remove(index: number) {
    if (index) {
      this.messages.splice(index - 1, 1);
      if (this.messages.length === 0) {
        this.show = false;
      }
    } else {
      this.messages = [];
      this.show = false;
    }

  }

  addMessage(message: string) {
    console.log('addMessage' + message);
    this.messages.push(message);
    this.show = true;
  }
}



