import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-matches-container',
  templateUrl: './matches-container.component.html',
  styleUrls: ['./matches-container.component.scss']
})
export class MatchesContainerComponent implements OnInit {

  @Input() matchDays

  @Input() scrollDown: boolean = true;
  @Input() currentMatchDay = 0
  @ViewChild('loading') loading:ElementRef
  @ViewChild('matches') matches:ElementRef
  constructor() {}

  ready(ele) {
    if (this.scrollDown) {
      this.showContent()
      this.scrollDown = false;
      ele.__ngContext__[0].children[this.currentMatchDay].firstChild.scrollIntoView({behavior: "smooth"})
    }
  }
  ngOnInit(): void {

  }

  showLoading(){
    if(this.loading !=null && this.matches !=null){
      this.loading.nativeElement.setAttribute("style","display:block")
      this.matches.nativeElement.setAttribute("style","display:none")
    }
  }
  showContent(){
    if(this.loading !=null && this.matches !=null){
      this.loading.nativeElement.setAttribute("style","display:none")
      this.matches.nativeElement.setAttribute("style","display:block")
    }
  }
}

