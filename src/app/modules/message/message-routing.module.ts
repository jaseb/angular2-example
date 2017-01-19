import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageListComponent } from './message-list.component';
import { MessageEditComponent } from './message-edit.component';
import { MessageDetailComponent } from './message-detail.component';

/*
 Declare in AppRoutingModule (app-routing.module.ts).

 Eg.
 { path: 'message', loadChildren: 'app/modules/message/message.module#MessageModule' }

 See 'HeroRoutingModule' in Angular 2 examples.
 */
const routes: Routes = [
  {
    //path: '', component: MessageComponent,
    path: '', redirectTo: 'list', pathMatch: 'full'
  },
  //children: [
    //{ path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: MessageListComponent },
    { path: 'new', component: MessageEditComponent },
    { path: ':id', component: MessageDetailComponent },
    { path: ':id/edit', component: MessageEditComponent }
    //]
  //}
];


@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class MessageRoutingModule {
}
