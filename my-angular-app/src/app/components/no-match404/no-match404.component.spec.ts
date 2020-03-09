import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoMatch404Component } from './no-match404.component';

describe('NoMatch404Component', () => {
  let component: NoMatch404Component;
  let fixture: ComponentFixture<NoMatch404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoMatch404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoMatch404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
