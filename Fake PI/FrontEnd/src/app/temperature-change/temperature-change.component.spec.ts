import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureChangeComponent } from './temperature-change.component';

describe('TemperatureChangeComponent', () => {
  let component: TemperatureChangeComponent;
  let fixture: ComponentFixture<TemperatureChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemperatureChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
