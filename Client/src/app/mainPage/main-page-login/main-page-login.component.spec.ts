import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageLoginComponent } from './main-page-login.component';

describe('MainPageLoginComponent', () => {
  let component: MainPageLoginComponent;
  let fixture: ComponentFixture<MainPageLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
