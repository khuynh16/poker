import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFloorComponent } from './game-floor.component';

describe('GameFloorComponent', () => {
  let component: GameFloorComponent;
  let fixture: ComponentFixture<GameFloorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameFloorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
