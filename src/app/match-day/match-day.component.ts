import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-day',
  templateUrl: './match-day.component.html',
  styleUrls: ['./match-day.component.scss']
})
export class MatchDayComponent implements OnInit {

  @Input() matchDay
  constructor() { }

  ngOnInit(): void {
  }

}
