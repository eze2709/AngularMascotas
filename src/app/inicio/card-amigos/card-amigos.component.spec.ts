import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAmigosComponent } from './card-amigos.component';

describe('CardAmigosComponent', () => {
  let component: CardAmigosComponent;
  let fixture: ComponentFixture<CardAmigosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardAmigosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAmigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
