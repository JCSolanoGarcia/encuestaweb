import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmaComponent } from './confirma.component';

describe('ConfirmaComponent', () => {
  let component: ConfirmaComponent;
  let fixture: ComponentFixture<ConfirmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
