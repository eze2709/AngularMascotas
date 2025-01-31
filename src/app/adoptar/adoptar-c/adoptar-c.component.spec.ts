import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptarCComponent } from './adoptar-c.component';

describe('AdoptarCComponent', () => {
  let component: AdoptarCComponent;
  let fixture: ComponentFixture<AdoptarCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdoptarCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdoptarCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
