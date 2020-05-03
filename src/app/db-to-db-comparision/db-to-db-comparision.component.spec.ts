import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbToDbComparisionComponent } from './db-to-db-comparision.component';

describe('DbToDbComparisionComponent', () => {
  let component: DbToDbComparisionComponent;
  let fixture: ComponentFixture<DbToDbComparisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbToDbComparisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbToDbComparisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
