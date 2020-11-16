import {Component,Input, Output , EventEmitter} from '@angular/core'

@Component({
    selector  : 'event-thumbnail',
    template : `    <div [routerLink] = "['/events',event.id]" class= "well hoverwell thumbnail">
    <h2>{{event.name}}</h2>
   <div>Date : {{event?.date}}</div>
   <div [ngClass] = "getStartTimeClass()" [ngSwitch] = "event?.time">
   Time : {{event?.time}}
   <span *ngSwitchCase="'8:00 am'">Early start</span>
   <span *ngSwitchCase="'10:00 am'">late start</span>
   <span *ngSwitchDefault>Normal start</span>
   
   </div>
   <div [ngStyle] = "getPriceStyle()">Price : {{event?.price}}</div>
   <div *ngIf="event?.location">
   <span>Location : {{event?.location.address}}</span>
   <span class="pad-left">{{event?.location.city}}, {{event?.location.country}}</span>
   </div>
</div>`
,

styles: [`
  
    .thumbnail {min-height : 210px;}
    .pad-left  {margin-left : 10px;}
`]

})


export class EventThumbnailComponent{
@Input() event :any

getStartTimeClass(){
   // const isEarlyStart = this.event && this.event.time === '8:00 am'
    //return {green : isEarlyStart, bold : isEarlyStart}

    if(this.event != null && this.event.time === '8:00 am')
    return ['green','bold']

    return ''
}

getPriceStyle():any{
    if(this.event && this.event.price>800)
    return {color:'red', 'font-weight' : 'bold'}

    return{}
}
}


