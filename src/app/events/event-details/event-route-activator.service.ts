import { Injectable } from '@angular/core';
import { EventService } from '../shared/event.service';
import { Router ,CanActivate ,ActivatedRouteSnapshot} from '@angular/router';
import { BOOL_TYPE } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class EVentRouteActivator{
constructor(private eventService : EventService,private router : Router){

}

canActivate( route : ActivatedRouteSnapshot){   

     const eventExist  = this.eventService.getEvent(+route.params['id'])

    if(!eventExist)
    this.router.navigate(['/404'])

    return eventExist;
}
}