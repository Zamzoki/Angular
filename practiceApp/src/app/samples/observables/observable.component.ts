import {Component, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  sequenceObservable: Observable<any>;
  value: string;
  eventObservable: Observable<any>;
  eventSubscription: Subscription;

  constructor() {
    this.sequenceObservable = new Observable(this.sequenceSubscribe);

    const nameInput = document.getElementById('nameId') as HTMLInputElement;
    this.eventObservable = this.createEventObservable(nameInput, 'keydown');
  }

  ngOnInit() {
    const sequenceObserver = {
      next(num) { console.log(num); this.value = num; },
      complete() { console.log('Finished sequence'); }
    };
    this.sequenceObservable.subscribe(sequenceObserver);

    const nameInput = document.getElementById('nameId') as HTMLInputElement;
    const eventObserver = {
      next(e: KeyboardEvent) {
        if (e.key === 'Escape') {
          nameInput.value = '';
        }
      },
      error(err) { console.log(err); },
      complete() { console.log('Completed'); }
    };
    this.eventSubscription = this.eventObservable.subscribe(eventObserver);
  }

  sequenceSubscribe(observer) {
    observer.next(1);
    observer.next(2);
    observer.next(3);

    observer.complete();

    return { unsubscribe() {} };
  }

  createEventObservable(target, event) {
    return new Observable(observer => {
      // handlerul nu face altceva decat sa paseze o variabila functiei next()
      const handler = e => observer.next(e);

      // cand fac subscription, adaug event listener pe target
      console.log('event listener added');
      target.addEventListener(event, handler);

      // cand am terminat, inlatur event listenerul de pe target
      return () => {
        observer.complete();
        target.removeEventListener(event, handler);
      };
    });
  }

  unsubscribe() {
    this.eventSubscription.unsubscribe();
  }

}
