import { Component, ElementRef, EventEmitter, Inject, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../api.service';
import { AppComponent } from '../app.component';
import { Animations } from '../animations/animations';

@Component({
  selector: 'app-teamdetailswindow',
  templateUrl: './teamdetailswindow.component.html',
  styleUrls: ['./teamdetailswindow.component.scss'],
  animations: [Animations.heightAnimation]
})
export class TeamdetailswindowComponent implements OnInit {

  @ViewChild('matchesLoading') matchesLoading: ElementRef
  @ViewChild('matchesContainer') matchesContainer: ElementRef
  @ViewChild('squadLoading') squadLoading: ElementRef
  @ViewChild('squadContainer') squadContainer: ElementRef
  @ViewChildren("ele") matchesContainerChilds: QueryList<any>


  matches = []
  coach
  squad = []
  scrollDown: boolean = true;
  isSquadLoaded: boolean = false
  squadHeight: number = 10
  isMatchesLoaded: boolean = false
  matchesHeight: number = 10
  @Input() lastMatchId = 0;
  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<TeamdetailswindowComponent>, private api: ApiService) {

  }

  toggleParentLoading(e) {
    this.data.emiter.emit(e)
  }


  ready() {
    if (this.scrollDown) {
      if (this.matchesContainerChilds.length > 0) {
        this.scrollDown = false;
        this.lastMatchId -= 3;
        if (this.lastMatchId < 0) {
          this.lastMatchId = 0
        } if (this.lastMatchId > this.matchesContainerChilds.toArray().length) {
          this.lastMatchId = this.matchesContainerChilds.toArray().length
        }

        this.matchesContainerChilds.toArray()[this.lastMatchId].elRef.nativeElement.scrollIntoView({ inline: "center", behavior: "smooth" })

      }
    }
  }

  ngOnInit(): void {
    var countries;

    this.api.getCountries().subscribe((data: any) => {
      countries = data
      for (let player of this.data.team.squad) {

        for (let c of countries.countries) {
          if (Object.values(c) == player.nationality) {
            player.countryCode = { code: Object.keys(c)[0] }
            break;
          }
        }

        if (player.role == "COACH") {
          this.coach = player
        } else {
          this.squad.push(player)
        }
      }
    })


    this.api.getMatchesforTeam(this.data.team.id).subscribe((data: any) => {
      for (let i = 0; i < data.count; i++) {
        if (AppComponent.competitionIds.includes(data.matches[i].competition.id)) {
          this.matches.push(data.matches[i])
          if (data.matches[i].status == "FINISHED" && AppComponent.inCompetitions(data.matches[i].competition.id)) {
            this.lastMatchId = this.matches.length
          }
        }
      }
      this.showMatchesContent()

      this.showSquadContent()
    })
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
  showMatchesLoading() {
    if (this.matchesLoading != null && this.matchesContainer != null) {
      this.matchesLoading.nativeElement.setAttribute("style", "display: flex;align-items: center;justify-content: center;")
      this.matchesContainer.nativeElement.setAttribute("style", "display:none")
      this.isMatchesLoaded = false;
      this.matchesHeight = 10;
    }
  }
  showMatchesContent() {
    if (this.matchesLoading != null && this.matchesContainer != null) {
      this.matchesLoading.nativeElement.setAttribute("style", "display:none")
      this.matchesContainer.nativeElement.setAttribute("style", "display:block")
      this.isMatchesLoaded = true;
      this.matchesHeight = 24;
    }
  }
  showSquadLoading() {
    if (this.squadLoading != null && this.squadContainer != null) {
      this.squadLoading.nativeElement.setAttribute("style", "display: flex;align-items: center;justify-content: center;")
      this.squadContainer.nativeElement.setAttribute("style", "display:none")
      this.isSquadLoaded = false;
      this.squadHeight = 10;
    }
  }
  showSquadContent() {
    if (this.squadLoading != null && this.squadContainer != null) {
      this.squadLoading.nativeElement.setAttribute("style", "display:none")
      this.squadContainer.nativeElement.setAttribute("style", "display:block")
      this.isSquadLoaded = true;
      this.squadHeight = 30;
    }
  }
}
