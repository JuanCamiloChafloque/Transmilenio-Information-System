import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerConductorComponent } from './ver-conductor.component';

describe('VerConductorComponent', () => {
  let component: VerConductorComponent;
  let fixture: ComponentFixture<VerConductorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerConductorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
