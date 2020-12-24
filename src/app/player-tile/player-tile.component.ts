import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-tile',
  templateUrl: './player-tile.component.html',
  styleUrls: ['./player-tile.component.scss']
})
export class PlayerTileComponent implements OnInit {

  @Input() player
  constructor() { }

  ngOnInit(): void {
  }

}
