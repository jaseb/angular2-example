import { Component, OnInit, Input } from '@angular/core';
import { Message } from './message';

@Component({
  selector: 'app-message-list-item',
  templateUrl: './message-list-item.component.html',
  styles: []
})
export class MessageListItemComponent implements OnInit {

  @Input() model: Message;
  @Input() id: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
