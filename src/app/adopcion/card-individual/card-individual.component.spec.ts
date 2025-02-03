import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIndividualComponent } from './card-individual.component';

describe('CardIndividualComponent', () => {
  let component: CardIndividualComponent;
  let fixture: ComponentFixture<CardIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardIndividualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
