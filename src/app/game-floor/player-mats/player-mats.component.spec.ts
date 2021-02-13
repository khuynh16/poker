import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMatsComponent } from './player-mats.component';

describe('PlayerCardsComponent', () => {
  let component: PlayerMatsComponent;
  let fixture: ComponentFixture<PlayerMatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerMatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerMatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
