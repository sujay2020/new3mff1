import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppServerDetailsComponent } from './app-server-details.component';

describe('AppServerDetailsComponent', () => {
  let component: AppServerDetailsComponent;
  let fixture: ComponentFixture<AppServerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppServerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppServerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
