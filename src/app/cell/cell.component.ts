import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Animations } from '../animations/animations';
@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],

  animations: [Animations.colorChangeAnimation]
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
