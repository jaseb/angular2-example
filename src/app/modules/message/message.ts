import { MessageAttribute } from './message-attribute';

export class Message {

  constructor(public name: string, public desc: string, public attrs: MessageAttribute[]) {
  }
}
