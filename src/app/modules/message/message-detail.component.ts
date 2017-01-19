import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from './message.service';
import { Message } from './message';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styles: []
})
export class MessageDetailComponent implements OnInit, OnDestroy {

  message: Message;

  private id: number;
  private subscription: Subscription;

  constructor(private router: Router, private route: ActivatedRoute, private service: MessageService) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.id = params[ 'id' ];
        this.message = this.service.getMessage(this.id);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onEdit() {
    this.router.navigate([ '/message', this.id, 'edit' ]);
  }

  onDelete() {
    this.service.deleteMessage(this.message);
    this.router.navigate([ '/message' ]);
  }

}
