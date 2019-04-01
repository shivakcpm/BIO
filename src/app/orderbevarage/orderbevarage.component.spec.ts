import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderbevarageComponent } from './orderbevarage.component';

describe('OrderbevarageComponent', () => {
  let component: OrderbevarageComponent;
  let fixture: ComponentFixture<OrderbevarageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderbevarageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderbevarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
