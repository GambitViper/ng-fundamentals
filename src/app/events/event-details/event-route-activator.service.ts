import { Router, CanActivate, ActivatedRouteSnapshot, CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { CreateEventComponent } from '../create-event.component';
import { EventService } from '../shared/event.service';

@Injectable({
    providedIn: 'root'
})
export class EventRouteActivator implements CanActivate, CanDeactivate<CreateEventComponent> {
    constructor(private eventService: EventService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot){
    //     const eventExists = !!this.eventService.getEvent(+route.params['id']);

    //     if(!eventExists){
    //         this.router.navigate(['/404']);
    //     }
    //     return eventExists;
      return true;
    }

    canDeactivate(component: CreateEventComponent, route: ActivatedRouteSnapshot){
        if(component.isDirty){
            return window.confirm('You have not saved this event, do you really want to cancel?');
        }
        return true;
    }
}