import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiKeyCounter = 0
  API_KEYS =[
    '1dd151a7affe4d089f9e33402a7e1b06',   // api którego używam pozwala na 10 calli w ciągu minuty
    'f0d90973cc3a4295af4bcf5ba3bf28bd',   // jest to dość mało więc dodanie kilku kont zwieksza ten limit
    'b7d07d212e9d49ceac21a68eb774394d',   // gdy zostanie przekroczony limit pobierany jest kolejny klucz
    '97988ebd95694ea7a27c698c2bb07b3a',   // w nadziei, że nie był on używany w przeciągu ostatniej minuty
    '0268db7c2dfe4f15941cba03b6a68c4f',   // ma to oczywiście swoje minusy, czasem odpowiedź od serwera będzie trwała dłużej 
    'fbe4254528914691b2b1bbcc0ad721aa',   // lub  gdy wszystkie klucze zostaną wykorzystane strona prawdopobobnie 
    '010695f0ece54ca59e829ae81f9ae0fe',   // na jakiś czas się zawiesi, aż któryś z kluczy będzie znów aktywny
    '8abad9639e9b4666a3adf8ef1ccde358',
  ]

  constructor(private httpClient: HttpClient) {
    this.apiKeyCounter = Number(localStorage.getItem('apicounter'))
   }


  competitions = [
    2000,2001,2002,2003,2013,2014,2015,2016,2017,2018,2019,2021
  ]
  
  public getStandings(id:number) {
    var request = this.getData('https://api.football-data.org//v2/competitions/'+id+'/standings')

    return request
  }

  public getCompetitions(){
    var request = this.getData('https://api.football-data.org//v2/competitions')
    return request
  }
  
  public getMatches(id:number){
    var request = this.getData('https://api.football-data.org/v2/competitions/'+id+'/matches')
    return request
  }
  
  getData(url){ 
    var options = {
      headers: new HttpHeaders({
         'X-Auth-Token': this.API_KEYS[this.apiKeyCounter]
       }),
       json: true
     }
    // console.log(this.apiKeyCounter)
    return this.httpClient.get(url, options).pipe(
      catchError(error => {
        this.apiKeyCounter++
        if(this.apiKeyCounter >= this.API_KEYS.length){
          this.apiKeyCounter = 0;
        }
        localStorage.setItem('apicounter',this.apiKeyCounter.toString())
        return this.getData(url);     
      }));
  }
}
