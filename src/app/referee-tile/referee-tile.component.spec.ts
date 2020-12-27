import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefereeTileComponent } from './referee-tile.component';

describe('RefereeTileComponent', () => {
  let component: RefereeTileComponent;
  let fixture: ComponentFixture<RefereeTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefereeTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefereeTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
