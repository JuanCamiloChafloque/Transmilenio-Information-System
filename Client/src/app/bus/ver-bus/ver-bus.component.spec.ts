import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerBusComponent } from './ver-bus.component';

describe('VerBusComponent', () => {
  let component: VerBusComponent;
  let fixture: ComponentFixture<VerBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerBusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
