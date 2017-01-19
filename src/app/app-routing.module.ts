import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: 'app/modules/home/home.module#HomeModule' },
  { path: 'lazy', loadChildren: 'app/modules/lazy/lazy.module#LazyModule' },
  { path: 'message', loadChildren: 'app/modules/message/message.module#MessageModule' }
  /*
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
  */
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
