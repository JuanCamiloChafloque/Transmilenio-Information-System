import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRutaComponent } from './lista-ruta.component';

describe('ListaRutaComponent', () => {
  let component: ListaRutaComponent;
  let fixture: ComponentFixture<ListaRutaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaRutaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
