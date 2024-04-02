import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customs',
  standalone: true
})
export class CustomsPipe implements PipeTransform {

  transform(name: string, gender:string): any {
    let updatedname="";
    if(gender==="M")
    {
      updatedname = "Mr " + name;
    }
    else if(gender==="F")
    {
      updatedname = "Mrs " + name;
    }

    return updatedname;
  }

}
