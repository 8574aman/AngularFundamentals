import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  EventsListComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EVentRouteActivator,
  EventListResolver,
  EventThumbnailComponent

} from './events/index'

import { EventsAppComponent } from './events-app.component';
import {NavBarComponent} from './nav/navbar.component'
import { ToastrService } from './common/toastr.service';
import { appRoutes } from 'src/routes';
import { RouterModule } from '@angular/router';
import { Error404Component } from './error/404.component';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  providers : [EventService,
    ToastrService,
    EVentRouteActivator,
    {
     provide : 'canDeactivateCreateEvent',
     useValue : checkDirtyState

    },
    EventListResolver
  ]
  ,
  bootstrap: [EventsAppComponent]
})
export class AppModule {

 }

 export function checkDirtyState(component : CreateEventComponent){

  if(component.isDirty)
   return window.confirm('data not saved , wanna exit ?')
   
   return component.isDirty;
 }
