import { EventsListComponent } from './app/events/events-list.component';
import { EventDetailsComponent } from './app/events/event-details/event-details.component';

import {Routes} from '@angular/router'
import { CreateEventComponent } from './app/events/shared/create-event.component';
import { Error404Component } from './app/error/404.component';
import { EVentRouteActivator } from './app/events/event-details/event-route-activator.service';
export const appRoutes : Routes = [
    {path : 'events' , component : EventsListComponent},
    {path : 'events/new' , component  : CreateEventComponent },
 
    {path : 'events/:id' , component : EventDetailsComponent, canActivate : [EVentRouteActivator] },
    {path : '404' , component : Error404Component},
    {path : '' , redirectTo : '/events' , pathMatch : 'full'}

]
  