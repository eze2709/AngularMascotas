import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAccesoComponent } from './registro-acceso.component';

describe('RegistroAccesoComponent', () => {
  let component: RegistroAccesoComponent;
  let fixture: ComponentFixture<RegistroAccesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistroAccesoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroAccesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
