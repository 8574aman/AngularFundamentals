import {EventsListComponent ,
    EventDetailsComponent ,
    CreateEventComponent,
    EVentRouteActivator ,
    EventListResolver
} from './app/events/index'
import {Routes} from '@angular/router'
import { Error404Component } from './app/error/404.component';

export const appRoutes : Routes = [
    {path : 'events' , component : EventsListComponent , resolve : {events : EventListResolver}},
    {path : 'events/new' , component  : CreateEventComponent , canDeactivate : ['canDeactivateCreateEvent']},
 
    {path : 'events/:id' , component : EventDetailsComponent, canActivate : [EVentRouteActivator] },
    {path : '404' , component : Error404Component},
    {path : '' , redirectTo : '/events' , pathMatch : 'full'},
    {path : 'user', loadChildren: './events/user/user.module#UserModule'}
    

]
  