import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playerPosition'
})
export class PlayerPositionPipe implements PipeTransform {

  transform(value: string): unknown {

    if (value.toLocaleLowerCase() == "defender") {
      return "Obrońca"
    }
    else if (value.toLocaleLowerCase() == "attacker") {
      return "Napastnik"
    }
    else if (value.toLocaleLowerCase() == "midfielder") {
      return "Pomocnik"
    }
    else if (value.toLocaleLowerCase() == "goalkeeper") {
      return "Bramkarz"
    }


    return null;
  }

}
