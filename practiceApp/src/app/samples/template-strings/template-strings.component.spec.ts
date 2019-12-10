import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateStringsComponent } from './template-strings.component';

describe('TemplateStringsComponent', () => {
  let component: TemplateStringsComponent;
  let fixture: ComponentFixture<TemplateStringsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateStringsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateStringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
