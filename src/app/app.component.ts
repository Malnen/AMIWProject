import { Component, Input, ViewChild } from '@angular/core';
import { ApiService } from './api.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('container') matchContainer;
  @ViewChild('tableContainer') tableContainer
  selectFormControl = new FormControl();
  title = 'projekt';
  data
  standings = []
  table = []
  competitionIds = [
    2002, 2003, 2013, 2014, 2015, 2017, 2019, 2021
  ]
  competitions = []
  matches = []
  matchDays = []
  public static imgUrls = []
  currentMatchDay = 0
  scrollDown = true;
  constructor(private api: ApiService) {

  }

  ngOnInit() {
    var laliga = 2014
    this.onChange(laliga)

    this.api.getCompetitions().subscribe((data: any) => {
      for (let i = 0; i < data.count; i++) {
        if (this.competitionIds.includes(data.competitions[i].id)) {
          this.competitions.push(data.competitions[i])

          if (data.competitions[i].id == laliga) {
            this.selectFormControl = new FormControl(data.competitions[i]);
          }
        }
      }
    })
  }

  pushImgUrls(table) {
    for (let i = 0; i < table.length; i++) {
      AppComponent.imgUrls.push({ id: table[i].team.id, url: table[i].team.crestUrl })
    }
  }

  onChange(id) {
    if (this.matchContainer != null) {
      this.matchContainer.showLoading()
    }
    if(this.tableContainer != null){
      this.tableContainer.showLoading()
    }
    this.api.getStandings(id).subscribe((data: any) => {
      this.data = data
      this.standings = data.standings[0]
      this.table = data.standings[0].table
      this.pushImgUrls(this.table)
      this.tableContainer.loaded = true;
    }
    )


    this.api.getMatches(id).subscribe((data: any) => {
      this.matchDays = []
      this.matches = data.matches
      this.currentMatchDay = 0

      var matchDay = []
      var count = 1
      var finished: boolean = false;
      for (let match of this.matches) {
        if (match.matchday == count) {
          matchDay.push(match)
          if (match.status == "FINISHED")
            finished = true;
        } else {
          if (finished) {
            this.currentMatchDay++
            finished = false;
          }
          this.matchDays.push({ count: count, matches: matchDay })
          count = match.matchday
          matchDay = []
          matchDay.push(match)
          if (match.status == "FINISHED")
            finished = true;
        }
      }
      if (this.matchContainer != null) {

        setTimeout(() => {
          this.matchContainer.scrollDown = true;
          this.matchContainer.currentMatchDay = this.currentMatchDay;
        }, 100);                                                               // opoźnienie automatycznego scrollowania, 
      }                                                                        // dzięki temu zostanie ono poprawnie wykonane (w teori :] )
    })                                                                         // wykonanie bez opóźnienia powoduje, że czasami
  }                                                                            // content jest scrollowany w złe miejscepm install --save npm-git-install


}