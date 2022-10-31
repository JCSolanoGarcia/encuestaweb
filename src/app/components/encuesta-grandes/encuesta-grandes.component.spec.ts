import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaGrandesComponent } from './encuesta-grandes.component';

describe('EncuestaGrandesComponent', () => {
  let component: EncuestaGrandesComponent;
  let fixture: ComponentFixture<EncuestaGrandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncuestaGrandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestaGrandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
