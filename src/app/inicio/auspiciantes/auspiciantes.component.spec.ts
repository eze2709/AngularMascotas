import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuspiciantesComponent } from './auspiciantes.component';

describe('AuspiciantesComponent', () => {
  let component: AuspiciantesComponent;
  let fixture: ComponentFixture<AuspiciantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuspiciantesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuspiciantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
