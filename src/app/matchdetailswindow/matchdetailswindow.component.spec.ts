import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchdetailswindowComponent } from './matchdetailswindow.component';

describe('MatchdetailswindowComponent', () => {
  let component: MatchdetailswindowComponent;
  let fixture: ComponentFixture<MatchdetailswindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchdetailswindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchdetailswindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
