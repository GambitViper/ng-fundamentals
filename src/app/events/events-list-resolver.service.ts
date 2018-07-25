import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './shared/event.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IEvent } from './shared/index';

@Injectable({
    providedIn: 'root'
})
export class EventListResolver implements Resolve<any> {

    constructor(private eventService: EventService) { }
    
    resolve(): Observable<IEvent[]>{
        return this.eventService.getEvents().pipe(map(events => events));
    }
}