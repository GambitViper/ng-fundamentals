import { Component, Input } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    template: `
      <div class="well hoverwell thumbnail">
        <h2>{{event?.name}}</h2>
        <div>Date: {{event?.date}}</div>
        <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
          Time: {{event?.time}}
          <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
          <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
          <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Price: \${{event?.price}}</div>
        <div *ngIf="event?.location">
          <span>Location: {{event?.location?.address}}</span>
          <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <div *ngIf="event?.onlineUrl">Online URL: 
          <span>{{event?.onlineUrl}}</span>
        </div> 
    </div>    
    `,
    styles: [`
        .thumbnail { min-height: 210px; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
    `]
})
export class EventThumbnailComponent {
    @Input() event:any;

    getStartTimeStyle(): any {
        if(this.event && this.event.time === '8:00 am'){
            return {color: '#AED581', 'font-weight': 'bold'};
        }else if(this.event && this.event.time === '10:00 am'){
            return {color: '#FF8A65', 'font-weight': 'bold'};
        }
        return {color: '#CFD8DC', 'font-weight': 'bold'};
    }
}