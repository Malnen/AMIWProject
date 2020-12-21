import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
  animations: [
    trigger('hover', [
      state('true', style({
        backgroundColor: 'orange'
      })),
      state('false', style({
        backgroundColor: '#292929'
      })),
      transition('true => false', [
        animate('0.2s')
      ]),
      transition('false => true', [
        animate('0.2s')
      ]),
    ]),
  ],
})
export class CellComponent implements OnInit {

  @Input() position
  isHover=false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    
  }

  onHover(){
    this.isHover = true;
  }

  onLeave(){
    this.isHover = false;
  }

}
