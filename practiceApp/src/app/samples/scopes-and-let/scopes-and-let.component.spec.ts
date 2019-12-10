import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopesAndLetComponent } from './scopes-and-let.component';

describe('ScopesAndLetComponent', () => {
  let component: ScopesAndLetComponent;
  let fixture: ComponentFixture<ScopesAndLetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScopesAndLetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScopesAndLetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
