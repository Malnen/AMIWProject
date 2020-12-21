import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Animations } from '../animations/animations';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [Animations.heightAnimation]
})
export class TableComponent implements OnInit {

  @Input() table
  @ViewChild('loading') loading: ElementRef
  @ViewChild('teams') teams: ElementRef
  loaded: boolean = false
  isLoaded: boolean = false
  height: number = 20


  constructor() { }

  ngOnInit(): void {
  }

  ready() {
    if (this.loaded) {
      this.showContent()
      this.loaded = false;
    }
  }
  showLoading() {
    if (this.loading != null && this.teams != null) {
      this.loading.nativeElement.setAttribute("style", "display:block")
      this.teams.nativeElement.setAttribute("style", "display:none")
      setTimeout(() => {
        this.isLoaded = false;
        this.height = 19.5
      }, 10);
    }
  }
  showContent() {
    if (this.loading != null && this.teams != null) {
      this.loading.nativeElement.setAttribute("style", "display:none")
      this.teams.nativeElement.setAttribute("style", "display:block")
      setTimeout(() => {
        this.isLoaded = true;
        this.height = this.table.length * 2
      }, 10);
    }
  }
}
