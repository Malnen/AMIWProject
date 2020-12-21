import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { AppComponent } from '../app.component';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Animations } from '../animations/animations';

@Component({
  selector: 'app-matchdetails',
  templateUrl: './matchdetails.component.html',
  styleUrls: ['./matchdetails.component.scss'],
  
  animations: [Animations.colorChangeAnimation]
})
export class MatchdetailsComponent implements OnInit {

  @Input() match

  @ViewChild('away') away: ElementRef
  @ViewChild('home') home: ElementRef
  isHover = false;
  homeURL
  awayURL

  homeTeamScore
  awayTeamScore

  constructor() { }

  ngOnInit(): void {
    this.homeURL = AppComponent.imgUrls.find(x => x.id == this.match.homeTeam.id).url
    this.awayURL = AppComponent.imgUrls.find(x => x.id == this.match.awayTeam.id).url

  }

  ngAfterViewInit() {
    this.away.nativeElement.setAttribute("style", "font-size:" + this.resizeText(this.match.awayTeam.name) + "vw;")
    this.home.nativeElement.setAttribute("style", "font-size:" + this.resizeText(this.match.homeTeam.name) + "vw;")
  }

  resizeText(text: string) {

    var fontSize = 0.75

    if (text.length > 15) {
      fontSize -= (text.length - 15) * 0.0005
    }
    return fontSize
  }
  onHover() {
    this.isHover = true;
  }

  onLeave() {
    this.isHover = false;
  }
}
