import {Component, OnInit} from '@angular/core'
import { EventService } from './shared/event.service';

@Component({
    selector : 'events-list',
    template : `<div>
    <h2>upcoming angular events</h2>
    <hr>
    <div class= "row">
    <div *ngFor="let event of events" class = "col-md-5">
        <event-thumbnail  [event] = "event"></event-thumbnail>
    </div>
     </div>
        </div>`
    
})

export class EventsListComponent implements OnInit{
  events : any[]
  constructor(private eventService : EventService)
  {
   }

  ngOnInit(){ // this is a lifecycle method which gets called everytime a componenet is loaded
    this.events = this.eventService.getEvents()  
    
  }
   }
