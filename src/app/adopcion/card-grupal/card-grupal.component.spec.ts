import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGrupalComponent } from './card-grupal.component';

describe('CardGrupalComponent', () => {
  let component: CardGrupalComponent;
  let fixture: ComponentFixture<CardGrupalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardGrupalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardGrupalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
