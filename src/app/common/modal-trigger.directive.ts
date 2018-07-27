import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Directive({
    selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
    @Input('modal-trigger') modalId: string;
    private element: HTMLElement;
    
    constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $ : any) { 
        this.element = ref.nativeElement;
    }

    ngOnInit() {
        this.element.addEventListener('click', event => {
            this.$(`#${this.modalId}`).modal({});
        });
    }
}