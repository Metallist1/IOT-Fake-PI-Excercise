import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumidityChangeComponent } from './humidity-change.component';

describe('HumidityChangeComponent', () => {
  let component: HumidityChangeComponent;
  let fixture: ComponentFixture<HumidityChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumidityChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumidityChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
