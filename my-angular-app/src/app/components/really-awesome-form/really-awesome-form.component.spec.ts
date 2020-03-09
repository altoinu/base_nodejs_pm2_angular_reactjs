import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReallyAwesomeFormComponent } from './really-awesome-form.component';

describe('ReallyAwesomeFormComponent', () => {
  let component: ReallyAwesomeFormComponent;
  let fixture: ComponentFixture<ReallyAwesomeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReallyAwesomeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReallyAwesomeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
