import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'matchDate'
})
export class MatchDatePipe implements PipeTransform {

  transform(value: any, format: string): unknown {

    var date: moment.Moment
    if (format != "other") {
      var v = value.utcDate
      v = v.replace('T', ' ')
      v = v.replace("Z", " ")

      date = moment(v, "YYYY-MM-DD HH:mm:ss")
      date.add(1, 'hours') // przesunięcie czasu o 1 godzinę do przodu

      if (format == 'time') {
        if (date.format("HH:mm") == "01:00") {
          return "-:-"  //w ligach które są dostępne na mojej stronie mecze nie są rozgrywane 
          //o godzinie 01:00,oznacza to że godzina nie została jeszcze ustalona
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
        if (value.status == "FINISHED") {
          return "Zakończony"
        }
        if (value.status == "POSTPONED") {
          return "Przełożony"
        }
        if (value.status == "SCHEDULED") {
          return "Zaplanowany"
        }
        if (moment().diff(date, 'm') <= 90 && moment().diff(date, 'm') >= 0) {
          return "Trwa " + moment().diff(date, 'm') + "\""
        }
        return null
      }
    }else{
      var v = value
      v = v.replace('T', ' ')
      v = v.replace("Z", " ")

      date = moment(v, "YYYY-MM-DD")
      return date.format("DD.MM.YY")
    }

    return date.format();
  }

}
