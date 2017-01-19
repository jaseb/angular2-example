import { Injectable } from '@angular/core';
import { Message } from './message';
import { MessageAttribute } from './message-attribute';

@Injectable()
export class MessageService {

  private data: Message[] = [
    new Message('Message 1', 'Message 1 Description',
      [
        new MessageAttribute('Attribute 1', 'Attribute 1 description'),
        new MessageAttribute('Attribute 2', 'Attribute 2 description'),
        new MessageAttribute('Attribute 3', 'Attribute 3 description')
      ]),
    new Message('Message 2', 'Message 2 Description',
      [
        new MessageAttribute('Attribute 1', 'Attribute 1 description'),
        new MessageAttribute('Attribute 2', 'Attribute 2 description'),
        new MessageAttribute('Attribute 3', 'Attribute 3 description')
      ])
  ];

  constructor() {
  }

  getMessages() {
    return this.data;
  }

  getMessage(id: number) {
    return this.data[ id ];
  }

  addMessage(model: Message) {
    this.data.push(model);
  }

  editMessage(persisted: Message, updated: Message) {
    this.data[ this.data.indexOf(persisted) ] = updated;
  }

  deleteMessage(model: Message) {
    this.data.splice(this.data.indexOf(model), 1);
  }

}
