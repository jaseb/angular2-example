import { Component, OnInit, OnDestroy, isDevMode } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MessageService } from './message.service';
import { Message } from './message';


@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html'
})
export class MessageEditComponent implements OnInit, OnDestroy {

  formGroup: FormGroup;
  private id: number;
  private model: Message;
  private isNew = true;
  private subscription: Subscription;

  constructor(private builder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private service: MessageService) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.id = +params[ 'id' ];
          this.model = this.service.getMessage(this.id);
          this.isNew = false;
        } else {
          this.isNew = true;
          this.model = null;
        }
        this.initForm();
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private initForm() {

    let name = '';
    let desc = '';
    let attrs: FormArray = new FormArray([]);

    if (!this.isNew) {

      if (this.model.hasOwnProperty('attrs')) {

        for (let i = 0; i < this.model.attrs.length; i++) {
          attrs.push(
            new FormGroup({
              name: new FormControl(this.model.attrs[ i ].name, Validators.required),
              desc: new FormControl(this.model.attrs[ i ].desc, Validators.required)
            })
          );
        }
      }

      name = this.model.name;
      desc = this.model.desc;

    }
    this.formGroup = this.builder.group({
      name: [ name, Validators.required ],
      desc: [ desc, Validators.required ],
      attrs: attrs
    });
  }

  onSubmit() {

    const formValue = this.formGroup.value;

    if (this.isNew) {
      this.service.addMessage(formValue);
    } else {
      this.service.editMessage(this.model, formValue);
    }

    if (isDevMode()) {
      console.log(JSON.stringify(formValue, null, 2));
    }

    this.navigateBack();
  }

  onCancel() {
    this.navigateBack();
  }

  onAddAttribute(name: string, desc: string) {
    (<FormArray>this.formGroup.controls[ 'attrs' ]).push(
      new FormGroup({
        name: new FormControl(name, Validators.required),
        desc: new FormControl(desc, Validators.required)
      })
    );
  }

  onRemoveAttribute(index: number) {
    (<FormArray>this.formGroup.controls[ 'attrs' ]).removeAt(index);
  }

  navigateBack() {
    this.router.navigate([ 'message' ]);
  }
}
