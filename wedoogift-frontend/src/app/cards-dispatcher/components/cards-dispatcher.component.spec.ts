import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsDispatcherComponent } from './cards-dispatcher.component';

describe('CardsDispatcherComponent', () => {
  let component: CardsDispatcherComponent;
  let fixture: ComponentFixture<CardsDispatcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsDispatcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsDispatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
