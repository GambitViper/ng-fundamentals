import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EventService } from './shared/event.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IEvent } from './shared/index';

@Injectable({
    providedIn: 'root'
})
export class EventResolver implements Resolve<any> {

    constructor(private eventService: EventService) { }
    
    resolve(route: ActivatedRouteSnapshot): Observable<IEvent>{
        return this.eventService.getEvent(route.params['id']);
    }
}