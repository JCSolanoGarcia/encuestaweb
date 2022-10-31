import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaExpendioComponent } from './encuesta-expendio.component';

describe('EncuestaExpendioComponent', () => {
  let component: EncuestaExpendioComponent;
  let fixture: ComponentFixture<EncuestaExpendioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncuestaExpendioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestaExpendioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
