import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  value: string;
  sequenceObservable: Observable<any>;
  eventSubscription: Subscription;
  asyncSequenceObservable: Observable<any>;

  constructor() {
    this.sequenceObservable = new Observable(this.sequenceSubscribe);
  }

  ngOnInit() {
    const sequenceObserver = {
      next(num) { console.log(num); this.value = num; },
      complete() { console.log('Finished sequence'); }
    };
    // this.sequenceObservable.subscribe(sequenceObserver);

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
    // this.eventSubscription = this.createEventObservable(nameInput, 'keydown').subscribe(eventObserver);

    // const asyncSequenceObserver = {
    //   next(num) { console.log(`Value from async sequence: ${num}`); },
    //   complete() { console.log('Sequence completed'); }
    // };
    // this.asyncSequenceObservable = new Observable(this.asyncSequenceSubscribe);
    // this.asyncSequenceObservable.subscribe(asyncSequenceObserver);
    // setTimeout(() => { this.asyncSequenceObservable.subscribe(asyncSequenceObserver); }, 500);
    this.asyncSequenceObservable = new Observable(this.multicastingAsyncSequenceSubscribe());
    setTimeout(() => {
      this.asyncSequenceObservable.subscribe({
        next(num) { console.log(`1st subscribe: ${num}`); },
        complete() { console.log('1st sequence completed'); }
      });
    }, 3000);
    setTimeout(() => {
      this.asyncSequenceObservable.subscribe({
        next(num) { console.log(`2nd subscribe ${num}`); },
        complete() { console.log('2nd sequence completed'); }
      });
    }, 5500);
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
    if (this.eventSubscription) {
      this.eventSubscription.unsubscribe();
    }
  }

  asyncSequenceSubscribe(observer) {
    const array = [1, 2, 3, 4, 5];
    let timeoutId;

    // declaration
    function iterate(arr, index) {
      timeoutId = setTimeout(() => {
        if (index === arr.length) {
          observer.next(arr[index]);
          iterate(arr, ++index);
        } else {
          observer.complete();
          clearTimeout();
        }
      }, 1000);
    }

    // call
    iterate(array, 0);

    return { unsubscribe() {
      clearTimeout(timeoutId);
    }};
  }

  multicastingAsyncSequenceSubscribe() {
    // variables I use for all subscriptions
    const array = [1, 2, 3, 4, 5];
    const observers = [];
    // there's a single set of values delivered to observers, using the same setTimeout method
    let timeoutId;

    // subscriber function, run for each subscription
    const subscribeFunction = observer => {
      observers.push(observer);

      // sequence observer that deals with the whole process and notifies all observers in the array
      const sequenceObserver = {
        next(val) {
          // iterate through observers and notify all subscriptions
          observers.forEach(obs => obs.next(val));
        },
        complete() {
          // notify all complete callbacks
          observers.slice(0).forEach(obs => obs.complete());
        }
      };

      // if it's first subscription, start the sequence
      // the execution is run only once for each element in the sequence, so sequenceObserver
      // calls next method of the observers in observers array only once
      if (observers.length === 1) {
        timeoutId = this.doSequence(sequenceObserver, array, 0);
      }

      return {
        unsubscribe() {
          // remove current observer
          observers.splice(observers.indexOf(observer), 1);

          // if there are no more listeners, cleanup
          if (observers.length === 0) {
            clearTimeout(timeoutId);
          }
        }
      };
    };

    return subscribeFunction;
  }

  doSequence(sequenceObserver, arr, idx) {
    return setTimeout(() => {
      sequenceObserver.next(arr[idx]);
      if (idx === arr.length - 1) {
        sequenceObserver.complete();
      } else {
        this.doSequence(sequenceObserver, arr, ++idx);
      }
    }, 1000);
  }
}
