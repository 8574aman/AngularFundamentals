import {Component} from '@angular/core'

@Component({
    selector : 'events-list',
    template : `<div>
    <h2>upcoming angular events</h2>
    
    <event-thumbnail [event] = event1 (eventClick) = "handleEventClicked($event)"></event-thumbnail>
    </div>`
    
})

export class EventsListComponent{
    event1 = {
        id : 1,
        name : 'Angular connect',
        date : '9/26/2020',
        time : '10:00 am',
        price : "100",
        location : {
            address : "Vijay Nagar",
            city : "Indore"
            ,country : "India"
        }
        ,
        imageUrl : 'assets/images/angularconnect-shield.png'
     
      }
}
