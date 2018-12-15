import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TribbleComponent } from './tribble.component';

describe('TribbleComponent', () => {
  let component: TribbleComponent;
  let fixture: ComponentFixture<TribbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TribbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TribbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
