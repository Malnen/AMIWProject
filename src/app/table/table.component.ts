import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import {ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {

  @Input() table
  @ViewChild('loading') loading:ElementRef
  @ViewChild('teams') teams:ElementRef
  loaded:boolean = false
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
    }
  }
  showContent(){
    if(this.loading !=null && this.teams !=null){
      this.loading.nativeElement.setAttribute("style","display:none")
      this.teams.nativeElement.setAttribute("style","display:block")
    }
  }
}
