import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastGames'
})
export class LastGamesPipe implements PipeTransform {

  transform(value: String): unknown {

    let result = ""
    
    for(let c of value){
      if(c == ","){
        result+=" "
      }else if(c == "W"){
        result+="✅"
      }else if(c == "D"){
        result+="➖"
      }else if(c == "L"){
        result+="❌"
      }
    }

    return result;
  }

}
