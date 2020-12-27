import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../api.service';
import { TeamdetailswindowComponent } from '../teamdetailswindow/teamdetailswindow.component';

@Component({
  selector: 'app-matchdetailswindow',
  templateUrl: './matchdetailswindow.component.html',
  styleUrls: ['./matchdetailswindow.component.scss']
})
export class MatchdetailswindowComponent implements OnInit {

  
  @Output() parentLoading: EventEmitter<any> = new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<MatchdetailswindowComponent>,private api:ApiService,public dialog: MatDialog) {
    this.parentLoading = data.emiter
  }

  toggleParentLoading(e){
    this.parentLoading.emit(e)
  }
  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
  openTeamDetails(team){
    this.parentLoading.emit("show");

    var id:number = 0
    if(team == "home"){
      id = this.data.match.homeTeam.id
    }else if(team == "away"){
      id = this.data.match.awayTeam.id
    }

    this.api.getTeam(id).subscribe((data:any)=>{
      console.log(data)
      this.parentLoading.emit("close");
      const dialogRef = this.dialog.open(TeamdetailswindowComponent, {
      data: {
        team: data,
        emiter: this.parentLoading
      }
    })
    
  });
  }
}
