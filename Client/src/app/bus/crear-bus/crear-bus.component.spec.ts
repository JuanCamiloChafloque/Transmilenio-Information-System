import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearBusComponent } from './crear-bus.component';

describe('CrearBusComponent', () => {
  let component: CrearBusComponent;
  let fixture: ComponentFixture<CrearBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearBusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
