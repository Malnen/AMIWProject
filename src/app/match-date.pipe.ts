import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'matchDate'
})
export class MatchDatePipe implements PipeTransform {

  transform(match: any, format: string): unknown {
    var value = match.utcDate
    value = value.replace('T', ' ')
    value = value.replace("Z", " ")
    
    var date: moment.Moment = moment(value,"YYYY-MM-DD HH:mm:ss")
    date.add(1,'hours') // przesunięcie czasu o 1 godzinę do przodu

    if (format == 'time') {
      if (date.format("HH:mm") == "00:00") {
        return "-:-"  //w ligach które są dostępne na mojej stronie mecze nie są rozgrywane 
        //o godzinie 00:00,oznacza to że godzina nie została jeszcze ustalona
      }
      return date.format("HH:mm")
    } else if (format == 'date') {

      if (date.isSame(moment(), 'd')) {
        return "Dzisiaj"
      } else if (date.isSame(moment().add(1, 'd'), 'd')) {
        return "Jutro"
      } else if (date.isSame(moment().subtract(1, 'd'), 'd')) {
        return "Wczoraj"
      }

      return date.format("DD.MM.YY")
    }
    else if (format == "extra") {
      if (match.status == "FINISHED") {
        return "Zakończony"
      }
      if (match.status == "POSTPONED") {
        return "Przełożony"
      }
      return null
    }
    return date.format();
  }

}
