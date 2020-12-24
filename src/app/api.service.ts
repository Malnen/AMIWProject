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
    '07a6cf5d8e284c39b43556481617d0d7',
    '7c5b3fcf530e472f9c9cf9f793c6d7ca',
   /* '1dd151a7affe4d089f9e33402a7e1b06',  
    'f0d90973cc3a4295af4bcf5ba3bf28bd',   
    'b7d07d212e9d49ceac21a68eb774394d',  
    '97988ebd95694ea7a27c698c2bb07b3a',  
    '0268db7c2dfe4f15941cba03b6a68c4f',   
    'fbe4254528914691b2b1bbcc0ad721aa',   
    '010695f0ece54ca59e829ae81f9ae0fe',   
    '8abad9639e9b4666a3adf8ef1ccde358',*/
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
     //console.log(this.apiKeyCounter + " key")
     //console.log(this.callsCounter+ " calls")
    return this.httpClient.get(url, options).pipe(
      catchError(error => {
        return this.getData(url);
      }));
  }
}
