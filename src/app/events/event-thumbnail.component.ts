import {Component,Input, Output , EventEmitter} from '@angular/core'

@Component({
    selector  : 'event-thumbnail',
    template : `    <div class= "well hoverwell thumbnail">
    <h2>{{event.name}}</h2>
   <div>Date : {{event.date}}</div>
   <div>Time : {{event.time}}</div>
   <div>Time : {{event.time}}</div>
   <div>
   <button class = "btn btn-primary" (click) = "handleClickMe()">
   Click me !
   </button>
   </div>
 </div>`
})


export class EventThumbnailComponent{
@Input() event :any
@Output() eventClick = new EventEmitter()
handleClickMe()
{
this.eventClick.emit(this.event.name)}
}


