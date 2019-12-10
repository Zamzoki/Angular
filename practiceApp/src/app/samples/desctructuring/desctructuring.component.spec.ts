import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesctructuringComponent } from './desctructuring.component';

describe('DesctructuringComponent', () => {
  let component: DesctructuringComponent;
  let fixture: ComponentFixture<DesctructuringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesctructuringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesctructuringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
