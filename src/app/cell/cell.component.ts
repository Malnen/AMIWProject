import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Animations } from '../animations/animations';
import {MatDialog} from '@angular/material/dialog';
import {TeamdetailswindowComponent} from '../teamdetailswindow/teamdetailswindow.component'
import { ApiService } from '../api.service';
@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],

  animations: [Animations.colorChangeAnimation]
})
export class CellComponent implements OnInit {

  @Input() position
  @Output() parentLoading: EventEmitter<any> = new EventEmitter();
  team
  isHover=false;
  closeResult = '';

  constructor(public dialog: MatDialog,private api:ApiService) {}

  openDialog() {
    this.parentLoading.emit("show");
    this.api.getTeam(this.position.team.id).subscribe((data:any)=>{
      this.team = data
      this.parentLoading.emit("close");
      const dialogRef = this.dialog.open(TeamdetailswindowComponent, {
      data: {
        team: this.team,
        emiter: this.parentLoading
      }
    })
    
  });
  }


  ngOnInit(): void {
  }

  onHover(){
    this.isHover = true;
  }

  onLeave(){
    this.isHover = false;
  }

}
