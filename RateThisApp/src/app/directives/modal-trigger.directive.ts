import {Directive, OnInit, Inject, ElementRef, Input} from '@angular/core';
import { JQ_TOKEN } from '../services';

@Directive({
  selector: '[appModalTrigger]'
})
export class ModalTriggerDirective implements OnInit {
  private element: HTMLElement;
  @Input('appModalTrigger') modalId: string;

  constructor(elementRef: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.element = elementRef.nativeElement;
  }

  ngOnInit() {
    this.element.addEventListener('click', () => {
      this.$(`#${this.modalId}`).modal({});
    });
  }
}
