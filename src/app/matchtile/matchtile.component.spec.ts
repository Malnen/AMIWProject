import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchtileComponent } from './matchtile.component';

describe('MatchdetailsComponent', () => {
  let component: MatchtileComponent;
  let fixture: ComponentFixture<MatchtileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchtileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchtileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
