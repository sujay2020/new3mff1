import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenarioOneComponent } from './senario-one.component';

describe('SenarioOneComponent', () => {
  let component: SenarioOneComponent;
  let fixture: ComponentFixture<SenarioOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenarioOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenarioOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
