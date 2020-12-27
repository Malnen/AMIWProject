import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-referee-tile',
  templateUrl: './referee-tile.component.html',
  styleUrls: ['./referee-tile.component.scss']
})
export class RefereeTileComponent implements OnInit {

  @Input() referee

  constructor() { }

  ngOnInit(): void {
  }

}
