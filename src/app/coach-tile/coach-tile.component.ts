import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-coach-tile',
  templateUrl: './coach-tile.component.html',
  styleUrls: ['./coach-tile.component.scss']
})
export class CoachTileComponent implements OnInit {

  @Input() coach
  constructor() {

   }

  ngOnInit(): void {
  }

}
