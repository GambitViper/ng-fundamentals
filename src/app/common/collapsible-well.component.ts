import { Component, Input } from '@angular/core';

@Component({
    selector: 'collapsible-well',
    template:`
    <div (click)="toggleContent()" class="well pointable">
      <h4>
        <ng-content select="[data-well-title]"></ng-content>
      </h4>
      <ng-content select="[data-well-body]" *ngIf="visible"></ng-content>
    </div>
    `
})
export class CollapsibleWellComponent {
    visible: boolean = false;

    toggleContent() {
        this.visible = !this.visible;
    }
}