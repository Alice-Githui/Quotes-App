import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): any {
    let currentDate:any = new Date().getDate()//get today's date and time
    let inputDate:any = new Date(value).getDate();
    let differenceInDays = currentDate - inputDate;


    if(differenceInDays >=1){
      return differenceInDays
    } else{
      return 0
    }  

  } 


}
