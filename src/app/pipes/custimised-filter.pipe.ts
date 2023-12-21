import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custimisedFilter'
})
export class CustimisedFilterPipe implements PipeTransform {

  transform(objs:any, x:string){
    if (x == undefined) {
      return(objs);
    }
    return (objs.filter((obj:any) => {return obj.teamOne.toLowerCase().includes(x.toLowerCase()) ||
       obj.teamTwo.toLowerCase().includes(x.toLowerCase())}
    )) 
  }

  






}
