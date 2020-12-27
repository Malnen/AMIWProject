import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Animations } from '../animations/animations';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../api.service';
import { MatchdetailswindowComponent} from '../matchdetailswindow/matchdetailswindow.component'
@Component({
  selector: 'app-matchtile',
  templateUrl: './matchtile.component.html',
  styleUrls: ['./matchtile.component.scss'],
  
  animations: [Animations.colorChangeAnimation]
})
export class MatchtileComponent implements OnInit {

  @Input() match

  @ViewChild('away') away: ElementRef
  @ViewChild('home') home: ElementRef
  isHover = false;
  color:string = "#242424"

  homeTeamScore
  awayTeamScore
  
  @Output() parentLoading: EventEmitter<any> = new EventEmitter();
  
  constructor(public elRef: ElementRef,public dialog: MatDialog,private api:ApiService) { }

  openDialog() {
    this.parentLoading.emit("show");
    this.api.getCountries().subscribe((data:any)=>{
      var countries = data

      this.api.getMatch(this.match.id).subscribe((matchData:any)=>{
     
        matchData.match.homeTeam.URL = this.match.homeTeam.URL
        matchData.match.awayTeam.URL = this.match.awayTeam.URL
        for (let referee of matchData.match.referees) {

          for(let c of countries.countries){
            if(Object.values(c) == referee.nationality){
              referee.countryCode = {code:Object.keys(c)[0]}
              break;
            }
          }
        }
        console.log(matchData)
        this.parentLoading.emit("close");
        const dialogRef = this.dialog.open(MatchdetailswindowComponent, {
        data: {
          match : matchData.match,
          emiter : this.parentLoading // jakos przekazac dalej ten emiter albo wykoanc metode??
        }
      })
    });
    })
    
}


  ngOnInit(): void {
    this.match.homeTeam.URL = AppComponent.imgUrls.find(x => x.id == this.match.homeTeam.id).url
    this.match.awayTeam.URL = AppComponent.imgUrls.find(x => x.id == this.match.awayTeam.id).url

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
    this.color = "orange"
  }

  onLeave() {
    this.isHover = false;
    this.color = "#242424"
  }
}
