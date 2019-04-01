import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueComponentComponent } from './que-component.component';

describe('QueComponentComponent', () => {
  let component: QueComponentComponent;
  let fixture: ComponentFixture<QueComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
