import { Directive, OnInit, Inject, ElementRef, Input} from '@angular/core';
import { JQ_TOKEN } from '../services';

@Directive({
  selector: '[appCloseModal]'
})
export class CloseModalDirective implements OnInit {
  private element: HTMLElement;
  @Input('appCloseModal') modalId: string;

  constructor(elementRef: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.element = elementRef.nativeElement;
  }

  ngOnInit(): void {
    this.element.addEventListener('click', () => {
      this.$(`#${this.modalId}`).modal('toggle');
    });
  }
}
