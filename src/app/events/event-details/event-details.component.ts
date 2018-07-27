import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EventService } from '../shared/event.service';
import { IEvent, ISession } from '../shared/index';

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
      .container { padding-left: 20px; padding-right: 20px; }
      .event-image { height: 100px; }
      a { cursor: pointer; }
    `]
})
export class EventDetailsComponent implements OnInit {
    event: IEvent;
    addMode: boolean;
    filterBy: string = 'all';
    sortBy: string = 'votes';

    constructor(private eventService: EventService,
                private route: ActivatedRoute) { }
    
    ngOnInit() {
        this.route.data.forEach((data) => {
            this.event = data['event'];;
            this.resetState();
        });
    }

    addSession() {
        this.addMode = true;
    }

    cancelAddSession() {
        this.addMode = false;
    }

    saveNewSession(session : ISession){
        const nextId = Math.max.apply(null, this.event.sessions.map(session => session.id));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.saveEvent(this.event).subscribe();
        this.addMode = false;
    }

    resetState() {
        this.addMode = false;
        this.filterBy = 'all';
        this.sortBy = 'votes';
    }
}