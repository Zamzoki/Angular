import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowFunctionsComponent } from './arrow-functions.component';

describe('ArrowFunctionsComponent', () => {
  let component: ArrowFunctionsComponent;
  let fixture: ComponentFixture<ArrowFunctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrowFunctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
