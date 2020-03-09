import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeNeatNumberListComponent } from './some-neat-number-list.component';

describe('SomeNeatNumberListComponent', () => {
  let component: SomeNeatNumberListComponent;
  let fixture: ComponentFixture<SomeNeatNumberListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeNeatNumberListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeNeatNumberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
