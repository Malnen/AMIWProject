import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { CellComponent } from './cell/cell.component';
import { HeaderComponent } from './header/header.component';
import { LastGamesPipe } from './last-games.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatDividerModule} from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatRippleModule} from '@angular/material/core';
import { MatchesContainerComponent } from './matches-container/matches-container.component';
import { MatchtileComponent } from './matchtile/matchtile.component';
import { MatchDayComponent } from './match-day/match-day.component';
import { MatchDatePipe } from './match-date.pipe';
import { TeamdetailswindowComponent } from './teamdetailswindow/teamdetailswindow.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { PlayerTileComponent } from './player-tile/player-tile.component';
import { PlayerPositionPipe } from './player-position.pipe';
import { CoachTileComponent } from './coach-tile/coach-tile.component';
import { MatchdetailswindowComponent } from './matchdetailswindow/matchdetailswindow.component';
import { RefereeTileComponent } from './referee-tile/referee-tile.component';
import { RefereeRolePipe } from './referee-role.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    CellComponent,
    HeaderComponent,
    LastGamesPipe,
    MatchesContainerComponent,
    MatchtileComponent,
    MatchDayComponent,
    MatchDatePipe,
    TeamdetailswindowComponent,
    PlayerTileComponent,
    PlayerPositionPipe,
    CoachTileComponent,
    MatchdetailswindowComponent,
    RefereeTileComponent,
    RefereeRolePipe,
  ],
  
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDividerModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatRippleModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
