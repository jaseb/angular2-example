import { Component, OnInit } from '@angular/core';
import { Message } from './message';
import { MessageService } from './message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styles: []
})
export class MessageListComponent implements OnInit {

  data: Message[] = [];

  constructor(private service: MessageService) {
  }

  ngOnInit() {
    this.data = this.service.getMessages();
  }

}
