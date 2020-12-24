import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamdetailswindowComponent } from './teamdetailswindow.component';

describe('TeamdetailswindowComponent', () => {
  let component: TeamdetailswindowComponent;
  let fixture: ComponentFixture<TeamdetailswindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamdetailswindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamdetailswindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
