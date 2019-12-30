import { Directive, OnInit, Inject, ElementRef } from '@angular/core';
import { JQ_TOKEN } from '../services';

@Directive({
  selector: '[appModalTrigger]'
})
export class ModalTriggerDirective implements OnInit {
  private element: HTMLElement;

  constructor(elementRef: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.element = elementRef.nativeElement;
  }

  ngOnInit() {
    this.element.addEventListener('click', () => {
      this.$('#simple-modal').modal({});
    });
  }
}
