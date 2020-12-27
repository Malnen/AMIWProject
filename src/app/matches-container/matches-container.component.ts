import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter, ViewChildren, QueryList } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  useAnimation,
} from '@angular/animations';

import {Animations} from '../animations/animations'

@Component({
  selector: 'app-matches-container',
  templateUrl: './matches-container.component.html',
  styleUrls: ['./matches-container.component.scss'],
  animations: [Animations.heightAnimation]
})
export class MatchesContainerComponent implements OnInit {

  @Output() parentLoading: EventEmitter<any> = new EventEmitter();
  @Input() matchDays

  @Input() scrollDown: boolean = true;
  @Input() currentMatchDay = 0
  @ViewChild('loading') loading:ElementRef
  @ViewChild('matches') matches:ElementRef
  @ViewChildren("ele") matchDaysChilds: QueryList<any>
  isLoaded = false;

  constructor() {}


  ready() {
    if (this.scrollDown) {
      this.showContent()
      if (this.matchDaysChilds.length > 0) {
        this.scrollDown = false;

        if (this.currentMatchDay < 0) {
          this.currentMatchDay = 0
        } if (this.currentMatchDay > this.matchDaysChilds.toArray().length) {
          this.currentMatchDay = this.matchDaysChilds.toArray().length
        }

        this.matchDaysChilds.toArray()[this.currentMatchDay].elRef.nativeElement.scrollIntoView({ inline: "start", behavior: "smooth" })

      }
    }
  }
  ngOnInit(): void {

  }

  toggleParentLoading(e){
    this.parentLoading.emit(e);
  }
  showLoading(){
    if(this.loading !=null && this.matches !=null){
      this.loading.nativeElement.setAttribute("style", "display: flex;align-items: center;justify-content: center;")
      this.matches.nativeElement.setAttribute("style","display:none")
      setTimeout(() => {
        this.isLoaded = false;
      }, 10);  
    }
  }
  showContent(){
    if(this.loading !=null && this.matches !=null){
      this.loading.nativeElement.setAttribute("style","display:none")
      this.matches.nativeElement.setAttribute("style","display:block") 
      setTimeout(() => {
        this.isLoaded = true;
      }, 10);  
    }
  }
}

