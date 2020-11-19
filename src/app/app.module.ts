import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component'
import {EventThumbnailComponent} from './events/event-thumbnail.component'
import {NavBarComponent} from './nav/navbar.component'
import {EventService} from './events/shared/event.service'
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { appRoutes } from 'src/routes';
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './events/shared/create-event.component';
import { Error404Component } from './error/404.component';
import { EVentRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './events/event-list-resolver.service';


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
