import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuelistcomponentComponent } from './quelistcomponent.component';

describe('QuelistcomponentComponent', () => {
  let component: QuelistcomponentComponent;
  let fixture: ComponentFixture<QuelistcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuelistcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuelistcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
