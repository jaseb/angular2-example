import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
// Components
import { MessageListComponent } from './message-list.component';
import { MessageListItemComponent } from './message-list-item.component';
import { MessageDetailComponent } from './message-detail.component';
import { MessageEditComponent } from './message-edit.component';
// Routing
import { MessageRoutingModule } from './message-routing.module';
// Services
import { MessageService } from './message.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MessageRoutingModule
  ],
  declarations: [
    MessageListComponent,
    MessageListItemComponent,
    MessageDetailComponent,
    MessageEditComponent
  ],
  providers: [ MessageService ]
})
export class MessageModule {
}
