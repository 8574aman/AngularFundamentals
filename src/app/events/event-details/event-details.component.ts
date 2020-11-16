import { Component, Injectable } from '@angular/core';
import { EventService } from '../shared/event.service';

@Component({
templateUrl : './event-details.component.html',
styles : [
    `
    .container { padding-left : 20px; padding-right : 20px} 
    .event-image { height : 100px}
    `
]
})
@Injectable()
export class EventDetailsComponent{
    event : any
    constructor(private eventService:EventService){}
    ngOnInit(){
        console.log("Event details called")
         this.event = this.eventService.getEvent(1)
    }
}