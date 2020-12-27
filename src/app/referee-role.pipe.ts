import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'refereeRole'
})
export class RefereeRolePipe implements PipeTransform {

  transform(value: string): unknown {

    if(value == "MAIN_REFEREE"){
      return "Sędzia Główny"
    }else if(value == "ASSISTANT_N1"){
      return "Sędzia Asystent"
    }else if(value == "ASSISTANT_N2"){
      return "Sędzia Asystent"
    }else if(value == "FOURTH_OFFICIAL"){
      return "Sędzia Techniczny"
    }else if(value == "REF"){
      return "Sędzia"
    }

    return null;
  }

}
