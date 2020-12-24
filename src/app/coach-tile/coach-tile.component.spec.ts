import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachTileComponent } from './coach-tile.component';

describe('CoachTileComponent', () => {
  let component: CoachTileComponent;
  let fixture: ComponentFixture<CoachTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
