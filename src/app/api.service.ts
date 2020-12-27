import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiKeyCounter = 0
  callsCounter = 0
  API_KEYS = [
    '1dd151a7affe4d089f9e33402a7e1b06',   
    'f0d90973cc3a4295af4bcf5ba3bf28bd',
    '77c5cfa5d21f40f6a4c247d2b8313a40',
    '47ae254272fa41368d3d721ddbc0e650',
    'fa0370a5103240d0ad8d5743010f22e8',
  ]

  constructor(private httpClient: HttpClient) {
    this.apiKeyCounter = Number(localStorage.getItem('apicounter'))
    this.callsCounter = Number(localStorage.getItem('callcounter'))
  }


  competitions = [
    2000, 2001, 2002, 2003, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2021
  ]

  public getStandings(id: number) {
    var request = this.getData('https://api.football-data.org//v2/competitions/' + id + '/standings')

    return request
  }

  public getCompetitions() {
    var request = this.getData('https://api.football-data.org//v2/competitions')
    return request
  }

  public getMatches(id: number) {
    var request = this.getData('https://api.football-data.org/v2/competitions/' + id + '/matches')
    return request
  }
  public getMatchesforTeam(id: number) {
    var request = this.getData('https://api.football-data.org/v2/teams/' + id + '/matches')
    return request
  }

  public getMatch(id:number){
    var request = this.getData('http://api.football-data.org/v2/matches/' + id)
    return request
  }
  public getTeam(id:number){
    var request = this.getData('http://api.football-data.org/v2/teams/' + id)
    return request
  }

  getData(url) {
    this.callsCounter++
    if (this.callsCounter >= 10) {
      this.callsCounter = 0
      this.apiKeyCounter++
      if (this.apiKeyCounter >= this.API_KEYS.length) {
        this.apiKeyCounter = 0;
      }
      localStorage.setItem('apicounter', this.apiKeyCounter.toString())
    }
    localStorage.setItem('callcounter', this.callsCounter.toString())
    var options = {
      headers: new HttpHeaders({
        'X-Auth-Token': this.API_KEYS[this.apiKeyCounter]
      }),
      json: true
    }
     console.log(this.apiKeyCounter + " key " + this.API_KEYS[this.apiKeyCounter])
    console.log(this.callsCounter+ " calls")
    return this.httpClient.get(url, options).pipe(
      catchError(error => {
        return this.getData(url);
      }));
  }

  getCountries(){
    var request = this.httpClient.get("assets/countries.json")
    return request
  }

}
