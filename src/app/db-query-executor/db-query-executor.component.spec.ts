import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbQueryExecutorComponent } from './db-query-executor.component';

describe('DbQueryExecutorComponent', () => {
  let component: DbQueryExecutorComponent;
  let fixture: ComponentFixture<DbQueryExecutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbQueryExecutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbQueryExecutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
