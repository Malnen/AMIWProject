import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../api.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-teamdetailswindow',
  templateUrl: './teamdetailswindow.component.html',
  styleUrls: ['./teamdetailswindow.component.scss']
})
export class TeamdetailswindowComponent implements OnInit {

  @ViewChild('matchesLoading') matchesLoading: ElementRef
  @ViewChild('matchesContainer') matchesContainer: ElementRef
  @ViewChild('squadLoading') squadLoading: ElementRef
  @ViewChild('squadContainer') squadContainer: ElementRef

  matches = []
  coach
  squad = []

  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<TeamdetailswindowComponent>, private api: ApiService) {

  }

  ngOnInit(): void {
    for (let player of this.data.team.squad) {
      if (player.role == "COACH") {
        this.coach = player
      } else {
        this.squad.push(player)
      }
    }
    this.api.getMatchesforTeam(this.data.team.id).subscribe((data: any) => {
      for (let i = 0; i < data.count; i++) {
        if (AppComponent.competitionIds.includes(data.matches[i].competition.id)) {
          this.matches.push(data.matches[i])
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
    }
  }
  showMatchesContent() {
    if (this.matchesLoading != null && this.matchesContainer != null) {
      this.matchesLoading.nativeElement.setAttribute("style", "display:none")
      this.matchesContainer.nativeElement.setAttribute("style", "display:block")
    }
  }
  showSquadLoading() {
    if (this.squadLoading != null && this.squadContainer != null) {
      this.squadLoading.nativeElement.setAttribute("style", "display: flex;align-items: center;justify-content: center;")
      this.squadContainer.nativeElement.setAttribute("style", "display:none")
    }
  }
  showSquadContent() {
    if (this.squadLoading != null && this.squadContainer != null) {
      this.squadLoading.nativeElement.setAttribute("style", "display:none")
      this.squadContainer.nativeElement.setAttribute("style", "display:block")
    }
  }
}
