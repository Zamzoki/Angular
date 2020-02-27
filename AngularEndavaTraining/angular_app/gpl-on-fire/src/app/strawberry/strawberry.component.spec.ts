import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrawberryComponent } from './strawberry.component';

describe('StrawberryComponent', () => {
  let component: StrawberryComponent;
  let fixture: ComponentFixture<StrawberryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrawberryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrawberryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
