import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomCoolComponent } from './random-cool.component';

describe('RandomCoolComponent', () => {
  let component: RandomCoolComponent;
  let fixture: ComponentFixture<RandomCoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomCoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomCoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
