import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBusComponent } from './lista-bus.component';

describe('ListaBusComponent', () => {
  let component: ListaBusComponent;
  let fixture: ComponentFixture<ListaBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaBusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
