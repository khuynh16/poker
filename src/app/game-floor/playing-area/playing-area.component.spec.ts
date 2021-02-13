import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingAreaComponent } from './playing-area.component';

describe('PlayingAreaComponent', () => {
  let component: PlayingAreaComponent;
  let fixture: ComponentFixture<PlayingAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayingAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
