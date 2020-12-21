import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import {ViewEncapsulation } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'], 
  animations: [
    trigger('loaded', [
      state('true', style({
        height: '*',
      })),
      state('false', style({
        height: '19.5vw',
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
export class TableComponent implements OnInit {

  @Input() table
  @ViewChild('loading') loading:ElementRef
  @ViewChild('teams') teams:ElementRef
  loaded:boolean = false
  isLoaded:boolean = false
  
  constructor() { }

  ngOnInit(): void {
  }

  ready() {
    if (this.loaded) {
      this.showContent()
      this.loaded = false;
    }
  }

  showLoading(){
    if(this.loading !=null && this.teams !=null){
      this.loading.nativeElement.setAttribute("style","display:block")
      this.teams.nativeElement.setAttribute("style","display:none")
      setTimeout(() => {
        this.isLoaded = false;
      }, 10);  
    }
  }
  showContent(){
    if(this.loading !=null && this.teams !=null){
      this.loading.nativeElement.setAttribute("style","display:none")
      this.teams.nativeElement.setAttribute("style","display:block")
      setTimeout(() => {
        this.isLoaded = true;
      }, 10);  
    }
  }
}
