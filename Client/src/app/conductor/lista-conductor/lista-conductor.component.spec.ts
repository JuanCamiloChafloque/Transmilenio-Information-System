import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaConductorComponent } from './lista-conductor.component';

describe('ListaConductorComponent', () => {
  let component: ListaConductorComponent;
  let fixture: ComponentFixture<ListaConductorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaConductorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
