import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeakMapWeakSetComponent } from './weak-map-weak-set.component';

describe('WeakMapWeakSetComponent', () => {
  let component: WeakMapWeakSetComponent;
  let fixture: ComponentFixture<WeakMapWeakSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeakMapWeakSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeakMapWeakSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
