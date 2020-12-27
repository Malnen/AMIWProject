import { ElementRef, EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-match-day',
  templateUrl: './match-day.component.html',
  styleUrls: ['./match-day.component.scss']
})
export class MatchDayComponent implements OnInit {

  @Output() parentLoading: EventEmitter<any> = new EventEmitter();
  @Input() matchDay
  constructor(public elRef: ElementRef,) { }

  ngOnInit(): void {
  }

  toggleParentLoading(e){
    this.parentLoading.emit(e);
  }
}
